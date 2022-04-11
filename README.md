# twitch-discord-chat-integration
tmi.js 모둘을 사용한 디스코드 트위치 채팅 연동봇

디스코드채팅과 트위치 채팅을 연결해줍니다

오류
====

1 . 오류발생시 https://discord.gg/Ybe6dNGQ 에 들어오신뒤 #버그-문의 티켓을 열어주시면 순차적으로 해결해드리겠습니다.  
2 . ㅈㅂ 티켓열고 서버 나가지 마세요.
3 . 세팅을 모르시겠다면 돈을 주시면 세팅해드리겠습니다(?)

사용법
=======

#### config.json 을 수정하시면 됩니다 , index.js 는 웬만하면 건들지 마세요.


```json
{
  "token" : "디스코드 봇 토큰",
  "twitch_channel" : "트위치전송해당 스트리머 id",
  "discord_channel" : "디스코드 채널 id",
  "max" : "트위치 최대전송 메세지글자수",
  "activity" : "디스코드 봇 상테메세지",

  "twitch_username" : "트위치 봇의 계정 id",
  "twitch_token" : "트위치 봇의 계정 토큰"
}
```

1 . 트위치 계정을 준비합니다 ( 트위치 봇이 아니며 사람 **계정**입니다.    

2 . 트위치 만든 계정으로 로그인한 상태로 https://twitchapps.com/tmi/ 에 접속하여 토큰을 발급해주세요.    

3 . config.json 에 token , twitch_channel(이름이 아닌 id 입니다) , discord_channel

discord_channel 에 채널id 를 넣으시면 됩니다 , 채널id 는 < 사용자 설정 => 고급 => 개발자모드를 켜주시고 채널에 우클릭하여 얻으실수있습니다.

주의
====

1 . 트위치 채널에 메세지를 전송할 계정에게는 웨만하면 < 메니저 > 역할을 주시기 바랍니다 , 슬로우타임이 있어서 메세지가 밀릴수있음.








