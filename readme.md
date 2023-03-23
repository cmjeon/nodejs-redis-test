## redis 학습용 nodejs

### nodejs 구동순서

docker 를 설치한다.

```bash
$ brew install docker
```

redis:latest 를 받는다.

```bash
$ docker pull redis:latest
```

docker 로 구동한다.

```bash
$ docker run --name myRedis -d -p 6379:6379 redis
```

nodejs 의 패키지를 설치한다.

```bash
$ yarn
# npm
$ npm install
```

nodejs 를 구동한다.

```bash
$ yarn start
# npm
$ npm start
```

## Dockerfile

### Dockerfile 로 Image 빌드하기

```shell
$ docker build -t { IMAGE_NAME } .
```

### Image 구동하기

```shell
$  docker run --name { CONTAINER_NAME } -d -p 3000:3000 { IMAGE_NAME }
```

### 컨테이너에 접속

```shell
$ docker exec -t -i {CONTAINER_ID} /bin/bash
```

## 두 컨테이너간 통신하기

### docker network 만들기

```shell
$ docker network create my-network
```

### 연결할 컨테이너를 구동할 때 --network my-network 옵션 추가

```shell
# redis
$ docker run --name myRedis -d -p 6379:6379 --network my-network redis

# nodejs
$ docker run --name myNode -d -p 3000:3000 --network my-network my-node
```

## 참고

- https://www.npmjs.com/package/redis
