# Real Time Messaging Board
![](video-screen.gif)

# How to install?
1. install composer ([reference](https://getcomposer.org/download/))

2. install swoole extension ([reference](https://www.swoole.co.uk/docs/get-started/installation))

3. clone this repository

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

# Any problem?

please open a issue !

