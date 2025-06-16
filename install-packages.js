#!/usr/bin/env node

/**
 * Korean Health Monitoring App - Package Installation Script
 * bODYFENCE 프로젝트 의존성 자동 설치 스크립트
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`\n${colors.bold}📦 ${description}...${colors.reset}`, 'blue');
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
    log(`✅ ${description} 완료!`, 'green');
    return true;
  } catch (error) {
    log(`❌ ${description} 실패: ${error.message}`, 'red');
    return false;
  }
}

function checkPackageManager() {
  try {
    execSync('npm --version', { stdio: 'ignore' });
    return 'npm';
  } catch {
    try {
      execSync('yarn --version', { stdio: 'ignore' });
      return 'yarn';
    } catch {
      try {
        execSync('pnpm --version', { stdio: 'ignore' });
        return 'pnpm';
      } catch {
        return null;
      }
    }
  }
}

function main() {
  log('\n🚀 Korean Health Monitoring App (bODYFENCE)', 'bold');
  log('패키지 의존성 설치를 시작합니다...\n', 'blue');

  // Package manager 확인
  const packageManager = checkPackageManager();
  if (!packageManager) {
    log('❌ npm, yarn, 또는 pnpm이 설치되어 있지 않습니다.', 'red');
    log('Node.js를 설치한 후 다시 시도해주세요.', 'yellow');
    process.exit(1);
  }

  log(`📋 패키지 매니저: ${packageManager}`, 'blue');

  // package.json 존재 확인
  if (!fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    log('❌ package.json 파일을 찾을 수 없습니다.', 'red');
    log('프로젝트 루트 디렉토리에서 실행해주세요.', 'yellow');
    process.exit(1);
  }

  // 의존성 설치
  const installCommand = packageManager === 'npm' ? 'npm install' : 
                        packageManager === 'yarn' ? 'yarn install' : 
                        'pnpm install';

  const success = runCommand(installCommand, '의존성 패키지 설치');

  if (success) {
    log('\n🎉 모든 패키지가 성공적으로 설치되었습니다!', 'green');
    log('\n다음 명령어로 개발 서버를 시작할 수 있습니다:', 'blue');
    log(`${colors.bold}${packageManager === 'npm' ? 'npm run dev' : packageManager + ' dev'}${colors.reset}`);
    
    log('\n📚 주요 설치된 패키지:', 'blue');
    log('• React 18 + TypeScript', 'green');
    log('• TailwindCSS v4', 'green');
    log('• Framer Motion (애니메이션)', 'green');
    log('• shadcn/ui 컴포넌트', 'green');
    log('• Radix UI 프리미티브', 'green');
    log('• React Hook Form + Zod', 'green');
    log('• Recharts (차트)', 'green');
    log('• Lucide React (아이콘)', 'green');
    log('• Sonner (토스트)', 'green');
    
  } else {
    log('\n❌ 패키지 설치 중 오류가 발생했습니다.', 'red');
    log('Node.js 버전 확인 후 다시 시도해주세요. (권장: Node.js 18+)', 'yellow');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, runCommand, checkPackageManager };