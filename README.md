# Real Time Messaging Board
![](video-screen.gif)

# How to install?
1. install composer ([reference](https://getcomposer.org/download/))

2. install swoole extension ([reference](https://www.swoole.co.uk/docs/get-started/installation))

3. run `git clone https://github.com/amirbagh75/real-time-messaging.git` to clone this repository 

4. run `composer install` in the root directory of application

5. run `cp .env.example .env`

6. run `php artisan key:generate`

7. run `php artisan swoole:http start` and everything should be ok now 😬

   

# Future plans?

- [ ] Add support for nicknames.
- [ ] save messages in database.
- [ ] add is typing !
- [ ] add join/left message.
- [ ] mobile application
- [ ] desktop application
- [ ] cli application
- [x] prevent empty string in messages
- [ ] prevent send many messages in very short time !
- [ ] Scalability for 1 milion user !
- [ ] notifications for new messages.
- [ ] dockerize
- [ ] unit tests

# Any problem?

please open a issue !

