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
