import java.util.*;
class game
{
    public static void main(String[] args)
    {
        Scanner sc=  new Scanner(System.in);
        System.out.println("WELCOME ONE AND ALL TO THE CAPITALS QUIZ GAME");
        String[] countries = {"Russia","France","England","China","Japan","Canada","Turkmenistan","Germany","Peru","Iran"};
        String[] capitals = {"Moscow","Paris","London","Beijing","Tokyo","Ottawa","Ashgabat","Berlin","Lima","Tehran"};
        int len = countries.length;
        int points = 0;
        int flag = 0;
        do
        {
            System.out.println("Type PLAY to start. Type QUIT to exit.");
            System.out.print("Enter choice:");  
            String ch = sc.next();
            System.out.println();  
            switch(ch)
            {
                case "PLAY" :
                for(int i=0; i<len; i++)
                {
                    System.out.println("What is the captital of "+countries[i]+"?");
                    String ans = sc.next();
                    if(ans.equalsIgnoreCase(capitals[i]))
                    {
                        points = points + 1;
                        System.out.println("YOU GOT A POINT!!");
                    }
                    else
                    {
                        points = points - 1;
                        System.out.println("you lost a point...");
                        System.out.println("The correct answer was: "+capitals[i]);
                    }
                    if(i==len-1)
                    {
                        System.out.println("No more questions :(");
                        break;
                    }
                }
                System.out.println("Points scored: "+points);
                if(points <= -5)
                {
                    System.out.println("Your generals knowledge really sucks....");
                }
                if(points <= -1 && points > -5)
                {
                    System.out.println("Work harder.");
                }
                if(points <= 5 && points > -1)
                {
                    System.out.println("You are moderately good.");
                }
                if(points <= 9 && points > 5)
                {
                    System.out.println("You are pretty awesome!");
                }
                if(points == 10)
                {
                    System.out.println("YOU ARE THE BOSS");
                }
                break;
                case "QUIT" : flag = 1;
                break;                
                default : System.out.println("INVALID");  
                          break;
                    }
            
        }while(flag == 0);
    }
}
