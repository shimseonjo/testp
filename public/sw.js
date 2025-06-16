// bODYFENCE Service Worker
// PWA 기능과 오프라인 지원을 위한 서비스 워커

const CACHE_NAME = 'bodyfence-v1.0.0';
const STATIC_CACHE_NAME = 'bodyfence-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'bodyfence-dynamic-v1.0.0';

// 캐시할 정적 자원들
const STATIC_ASSETS = [
  '/',
  '/main.tsx',
  '/App.tsx',
  '/styles/globals.css',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// 캐시하지 않을 URL 패턴
const SKIP_CACHE_PATTERNS = [
  /\/api\//,
  /\/auth\//,
  /\/fall-detection\//,
  /\/emergency-contact\//
];

// 설치 이벤트 - 정적 자원 캐시
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Installation failed:', error);
      })
  );
});

// 활성화 이벤트 - 이전 캐시 정리
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete');
        return self.clients.claim();
      })
      .catch((error) => {
        console.error('[SW] Activation failed:', error);
      })
  );
});

// Fetch 이벤트 - 네트워크 요청 인터셉트
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 캐시를 건너뛸 패턴 확인
  const shouldSkipCache = SKIP_CACHE_PATTERNS.some(pattern => 
    pattern.test(url.pathname)
  );
  
  if (shouldSkipCache) {
    // 중요한 API 요청은 캐시하지 않고 직접 네트워크로
    event.respondWith(
      fetch(request)
        .catch(() => {
          // 네트워크 실패 시 오프라인 페이지 반환
          if (request.mode === 'navigate') {
            return caches.match('/offline.html') || new Response(
              '오프라인 상태입니다. 네트워크 연결을 확인해주세요.',
              { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
            );
          }
        })
    );
    return;
  }
  
  // 정적 자원에 대한 캐시 우선 전략
  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // 캐시에서 발견되면 반환하고 백그라운드에서 업데이트
            fetch(request)
              .then((networkResponse) => {
                if (networkResponse.status === 200) {
                  const responseClone = networkResponse.clone();
                  caches.open(DYNAMIC_CACHE_NAME)
                    .then((cache) => {
                      cache.put(request, responseClone);
                    });
                }
              })
              .catch(() => {
                // 네트워크 실패는 무시 (캐시된 버전 사용)
              });
            
            return cachedResponse;
          }
          
          // 캐시에 없으면 네트워크에서 가져와서 캐시에 저장
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(DYNAMIC_CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return networkResponse;
            })
            .catch(() => {
              // 네트워크 실패 시 기본 응답
              if (request.mode === 'navigate') {
                return new Response(`
                  <!DOCTYPE html>
                  <html lang="ko">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>bODYFENCE - 오프라인</title>
                    <style>
                      body { 
                        font-family: 'Pretendard', sans-serif; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh; 
                        margin: 0; 
                        background: #2260FF; 
                        color: white; 
                        text-align: center;
                      }
                      .container { max-width: 360px; padding: 2rem; }
                      h1 { font-size: 2rem; margin-bottom: 1rem; }
                      p { font-size: 1.1rem; line-height: 1.5; }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <h1>bODYFENCE</h1>
                      <p>현재 오프라인 상태입니다.<br>네트워크 연결을 확인해주세요.</p>
                      <button onclick="window.location.reload()" style="
                        background: white; 
                        color: #2260FF; 
                        border: none; 
                        padding: 12px 24px; 
                        border-radius: 8px; 
                        font-size: 1rem; 
                        margin-top: 1rem;
                        cursor: pointer;
                      ">다시 시도</button>
                    </div>
                  </body>
                  </html>
                `, {
                  headers: { 'Content-Type': 'text/html; charset=utf-8' }
                });
              }
              
              return new Response('오프라인 상태입니다.', {
                status: 503,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
              });
            });
        })
    );
  }
});

// 푸시 알림 이벤트 (낙상 감지 알림용)
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  try {
    const data = event.data.json();
    const options = {
      body: data.body || '낙상이 감지되었습니다. 즉시 확인해주세요.',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      tag: data.tag || 'fall-detection',
      requireInteraction: true,
      actions: [
        {
          action: 'view',
          title: '확인'
        },
        {
          action: 'dismiss',
          title: '무시'
        }
      ],
      data: {
        url: data.url || '/',
        timestamp: Date.now(),
        type: data.type || 'fall-detection'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(
        data.title || 'bODYFENCE 알림',
        options
      )
    );
  } catch (error) {
    console.error('[SW] Push notification error:', error);
  }
});

// 알림 클릭 이벤트
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const action = event.action;
  const data = event.notification.data;
  
  if (action === 'dismiss') {
    return;
  }
  
  // 앱 열기
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // 이미 열린 창이 있으면 포커스
        for (let client of clientList) {
          if (client.url.includes(data.url || '/') && 'focus' in client) {
            return client.focus();
          }
        }
        
        // 새 창 열기
        if (clients.openWindow) {
          return clients.openWindow(data.url || '/');
        }
      })
  );
});

// 백그라운드 동기화 (나중에 구현할 수 있는 기능)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // 백그라운드에서 데이터 동기화 작업
      console.log('[SW] Background sync triggered')
    );
  }
});

// 에러 핸들링
self.addEventListener('error', (event) => {
  console.error('[SW] Service Worker error:', event.error);
});

console.log('[SW] Service Worker loaded successfully');