#<!-- Post -->
# <section class = "post pygame python adventure fireball">
#     <section class="postcol">
    #     <article>
    #         <h4 onclick="showMore('fireball',2)">Fireball</h4>
    #         <p>A game I made with the Python library pygame. I even drew the graphics for the game!</p>
    #         <p onclick="showMore('fireball',2)" class="readmore" id="fireballreadmore">...</p>
    #     </article>
    #     <section>
    #         <p><img src='images/pr1.png' class="postpicapp" alt="Post Thumbnail"></p>
    #     </section>
#     </section>
#     <article id='fireball' class="hidden">
#       <span class="more"><p id="more">This project is one of my favorites and one that I had a lot of fun making. Its an obstacle avoidace game but instead of going on infinitely like the others it has a BOSS FIGHT and an ending!</span>
#         <br>
#         <div class="slideshow-container">
#           <div class="mySlides slider2">
#             <div style="text-align: center;">
#               <img src="images/pr2.png" class="slide-img" width="80%">
#             </div>
#             <div class="caption-text">Level 1</div>
#           </div>
#           <div class="mySlides slider2">
#             <div style="text-align: center;">
#               <img src="images/pr1.png" class="slide-img" width="80%">
#             </div>
#             <div class="caption-text">Level 2</div>
#           </div>

#         <a class="prev" onclick="plusSlides(-1,2)">&#10094;</a>
#         <a class="next" onclick="plusSlides(1,2)">&#10095;</a>
#         </div>
#         <br>
#         <section style="text-align:center">
#         <span class="dot dot2" onclick="currentSlide(1,2)"></span> 
#         <span class="dot dot2" onclick="currentSlide(2,2)"></span> 
#         </section>

#         <p id="more">I made this game using pygame the python library. I wanted to make a game that was 100% mine and even drew the art myself on piskelapp. Only the music files aren't mine, all sources are listed in the code. The highscore is stored in a seprate text file that the program writes to so that it remembers your high score. The game has two levels, with the second one being the bossfight. The boss fight has a moving enemy that shoots projectiles. The user can also attack the enemy when his charge gets restored.</p>
#         <p onclick="hide('fireball')" style="font-size: smaller;" class="readmore" id="fireballreadmore">show less</p>
#     </article>
#     <ul class="tags">
#     <li>Python</li>
#     <li>Pygame</li>
#     <li>Game</li>
#     </ul>
# </section>
print("Welcome to Postmaker!!")
print("")

details = open("posts_no.txt","r")
n=int(details.readline())
details.close()
images=[]
details = open("posts_no.txt","w")

choice1=input("Does your post use a carousel? [y/n]")
if(choice1.lower()=="y"):
    n = n+1
    runnr = int(input("How many images does your post have?"))
else:
    n=-1
    runnr=1

for i in range(runnr):
    images.append(input("Enter image name: "))
details.write(str(n))
details.close()
print("")

post_name = input("What's your post's name? ")
post_description = input("What's your post's short description? ")
post_long_description = input("What's your post's long description? ")
post_lines = ["<!-- Post -->"]
print("")

keywords=input("What are the keywords(eg. post ductivitypro browser extension chrome) for this post?")
post_lines.append('<section id="jump'+post_name+'" class = "'+keywords+'">')
post_lines.append(' <section class="postcol">')
post_lines.append('     <article>')
post_lines.append("         <h4 onclick='showMore("+'"'+post_name.lower()+'",'+str(n)+")'"+'>'+post_name+"</h4>")
post_lines.append("         <p>"+post_description+"</p>")
post_lines.append("         <p onclick='showMore("+'"'+post_name.lower()+'",'+str(n)+")'"+' class="readmore" id="'+post_name.lower()+'readmore">...</p>')
post_lines.append('     </article>')
post_lines.append('     <section>')
post_lines.append('         <p><img src="images/'+images[i]+'," class="postpicapp" alt="Post Thumbnail"></p>')
post_lines.append('     </section>')
post_lines.append(' </section>')
post_lines.append(' <article id="'+post_name.lower()+'" class="hidden">')
post_lines.append('     <span class="more"><p id="more">'+post_long_description+'</p></span>')
post_lines.append('     <br>')
if(choice1.lower()=="y"):
    post_lines.append('     <div class="slideshow-container">')
    for i in range(len(images)):
        post_lines.append('         <div class="mySlides slider'+str(n)+'">')
        post_lines.append('             <div style="text-align: center;">')
        post_lines.append('                 <img src="images/'+images[i]+'" class="slide-img" width="80%">')
        post_lines.append('             </div>')
        post_lines.append('             <div class="caption-text">'+input("Caption for "+str(i)+"th image: ")+'</div>')
        post_lines.append('         </div>')
    post_lines.append('     <a class="prev" onclick="plusSlides(-1,'+str(n)+')">&#10094;</a>')
    post_lines.append('     <a class="next" onclick="plusSlides(1,'+str(n)+')">&#10095;</a>')
    post_lines.append('     </div>')
    post_lines.append('     <br>')
    post_lines.append('     <section style="text-align:center">')
    for i in range(len(images)):
        post_lines.append('         <span class="dot dot'+str(n)+'" onclick="currentSlide('+str(i+1)+','+str(n)+')"></span>')
    post_lines.append('     </section>')
post_lines.append('     <p onclick="hide("'+post_name.lower()+'")" style="font-size: smaller;" class="readmore" id="'+post_name.lower()+'readmore"><a href="#jump'+post_name+'" style="color: black;">show less</a></p>')
post_lines.append(' </article>')
post_lines.append(' <ul class="tags">')
tags=keywords.split(" ")
for i in range(1,len(tags)):
    post_lines.append('     <li>'+tags[i]+'</li>')
post_lines.append(' </ul>')
post_lines.append('</section>')

print("")

#Render
for i in range(len(post_lines)):
    print(post_lines[i])