# Real Time Messaging Board
![](video-screen.gif)


# Why ?

I like to learn software engineering. One of the best ways is to develop open source and public projects. If there is a wrong architecture or there are some better ways to do something, the software community will teach it to me. And finally I would like to share my knowledge with others.

   

# Roadmap (From the user's perspective)

- ### user view
    
- ### phase 0: Holy knowledge
    i research about messengers main topics, challenges and technologies and write about it in my blog. [link](http://amirbagh75.ir/)     
    And I put all the good links to study in issues too.

- ### phase 1: The birth of a messenger
    - #### part 1: 
        - [ ] Simple architectural analysis to get started (make code base 😎)
        - [ ] User2User chat
        - [ ] Signup with username + name + lastname + bio
        - [ ] send text messages
        - [ ] send file messages
        - [ ] notification for new messages (browsers)
        - [ ] web client (SPA)
        - [ ] chat history
        - [ ] users chat list history (main page of app)
        - [ ] search users by username and start chat!
        - [ ] unit tests
        - [ ] CI/CD
        - [ ] deploy on server
        
    - #### part 2: 
        - [ ] Voice Call (User2User)
        - [ ] deploy on server
    - #### part 3: 
        - [ ] Video Call (User2User)
        - [ ] deploy on server
    - #### part 4:
        - [ ] deploy on server

- ### phase 2: Scalability for 100k concurrent user
    - comming soon
- ### phase 3: Speed,Speed,Speed
    - comming soon
- ### phase 4: Develop clients
    - Mobile Client (Android + IOS)
    - Desktop Client (Windows + Linux + Mac OS)
    - CLI (Linux)
- ### phase 5: Security,Security,Security
    - comming soon



# How to install?
1. install composer ([reference](https://getcomposer.org/download/))

2. install swoole extension ([reference](https://www.swoole.co.uk/docs/get-started/installation))

3. run `git clone https://github.com/amirbagh75/real-time-messaging.git` to clone this repository 

4. run `composer install` in the root directory of application

5. run `cp .env.example .env`

6. run `php artisan key:generate`

7. run `php artisan swoole:http start` and everything should be ok now 😬


# Any problem?

please open a issue !

# Any idea?

please open a issue !


