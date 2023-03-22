## redis 학습용 nodejs

## 구동순서

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

## 참고

- https://www.npmjs.com/package/redis
