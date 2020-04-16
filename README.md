# nodejssample

# import/export/requie
- ES6, CommonJs

# SSR (Server Side Rendering) / CSR (Client Side Rendering)

# BFF (Back-end For Front-end)

# Cluster
  - 문제점 : 
    - nodejs default single thread
    - cluster 사용하여 다수 process 동작 가능 
    - 단 cluster 간 데이터의 공유는 불가능 하다. 
    
  - Thread / Process / Cluster / Instance 
  - Master / Worker 
  - Fork Mode / Cluster Mode 
  
# 무중단 서비스 : pm2
  - https://engineering.linecorp.com/ko/blog/pm2-nodejs/

# 분산처리 
  - ELB + Socket.io + Redis 
  - https://mudchobo.tistory.com/539
  - http://library.gabia.com/contents/infrahosting/8018
  - http://egloos.zum.com/metashower/v/9893770
  - https://stackoverflow.com/questions/8754304/redis-connection-to-127-0-0-16379-failed-connect-econnrefused
  - https://medium.com/@rlatla626/aws-elasticbeanstalk-node-js-socket-io-redis%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85%EC%84%9C%EB%B2%84-2-11b0dc16f9cf
  - https://aws.amazon.com/ko/blogs/korea/how-to-build-a-chat-application-with-amazon-elasticache-for-redis/
  - https://graykick.tistory.com/5
  - https://m.blog.naver.com/PostView.nhn?blogId=bitofsky&logNo=221071064114&proxyReferer=https:%2F%2Fwww.google.com%2F
  
  
  
