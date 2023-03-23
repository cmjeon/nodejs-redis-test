# Node.js 이미지를 기반으로 한다.
FROM node:latest

# 라벨:작성자
LABEL author="cmjeon"

# 앱 디렉토리 생성
WORKDIR /app

# 앱 종속성 설치
COPY package.json ./
# 앱 소스 추가
COPY ./ ./

RUN yarn install

# 호스트와 통신할 포트
EXPOSE 3000

# 컨테이너 실행 시 실행될 명령어
CMD [ "yarn", "start" ]