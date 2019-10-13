import java.util.*;
public class project {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Welcome to the GAME(use your imagination)");
        System.out.println("Move up and down while avoiding the asterisks");
        System.out.println("I mean...the asteroids!(use your imagination)");
        boolean counter = true;
        do {
            System.out.println("Press 1 to start");
            System.out.println("Press 2 to quit");
            System.out.println("Enter a choice: ");
            int ch=sc.nextInt();
            int score=0;
            switch(ch) {
                case 1:
                    boolean live = true;
                    int pos = 3;
                    int time = 0;
                    boolean m_create = false;
                    String space = "---";
                    String player = "YOU";
                    String spacex = "---";
                    int s_posx = 3;
                    int s_posy = 3;

                    System.out.println(space + space + space);
                    System.out.println(space + space + space);
                    System.out.println(player + space + space);
                    System.out.println(space + space + space);
                    System.out.println(space + space + space);
                    System.out.println("W to move up, S to move down or Q to quit");
                    System.out.println("Note: If you're on the topmost level and you press W you will stay there.");
                    do {
                        System.out.println("W/S: ");
                        String cho = sc.next();
                        time = time + 1;
                        score+=1;
                        spacex = "***";
                        boolean created =false;
                            switch (cho) {
                                case "W":
                                    if (pos != 1) {
                                        pos = pos - 1;
                                    }
                                    if (pos == s_posy && s_posx == 2) {
                                        live = false;
                                    }
                                    if(live==true) {
                                        for (int i = 1; i <= 5; i++) {
                                            if (m_create == false) {
                                                if (i == pos) {
                                                    System.out.println(player + space + spacex);
                                                    s_posy = i;
                                                    s_posx = 3;
                                                    m_create = true;
                                                } else {
                                                    System.out.println(space + space + space);
                                                }
                                            } else if (m_create == true) {
                                                if (i == pos) {
                                                    System.out.println(player + space + space);

                                                } else if (i == s_posy) {
                                                    System.out.println(space + spacex + space);
                                                    s_posx = 2;
                                                    m_create = false;
                                                } else {
                                                    System.out.println(space + space + space);
                                                }
                                            }
                                        }
                                    }
                                    else{
                                        System.out.println("---Y-----");
                                        System.out.println("L----O---");
                                        System.out.println("--O-----U");
                                        System.out.println("----S----");
                                        System.out.println("-------T-");

                                    }

                                    break;
                                case "S":
                                    if (pos != 5) {
                                        pos = pos + 1;
                                    }
                                    if (pos == s_posy && s_posx == 2) {
                                        live = false;
                                    }
                                    if(live==true) {
                                        for (int i = 1; i <= 5; i++) {
                                            if (m_create == false) {
                                                if (i == pos) {
                                                    System.out.println(player + space + spacex);
                                                    s_posy = i;
                                                    s_posx = 3;
                                                    m_create = true;
                                                } else {
                                                    System.out.println(space + space + space);
                                                }
                                            } else if (m_create == true) {
                                                if (i == pos) {
                                                    System.out.println(player + space + space);
                                                    s_posy = i;
                                                    s_posx = 3;
                                                    m_create = true;
                                                } else if (i == s_posy) {
                                                    System.out.println(space + spacex + space);
                                                    s_posx = 2;
                                                    m_create = false;
                                                } else {
                                                    System.out.println(space + space + space);
                                                }
                                            }
                                        }
                                    }
                                    else{
                                        System.out.println("---Y-----");
                                        System.out.println("L----O---");
                                        System.out.println("--O-----U");
                                        System.out.println("----S----");
                                        System.out.println("-------T-");
                                        System.out.println();
                                        System.out.println("Your score is: "+score);
                                        if(score<=3) {
                                            System.out.println("Your performance was poor. I am displeased.");
                                        }
                                        else if(score>3 && score <7) {
                                            System.out.println("Your performance was average.");
                                        }
                                        else{
                                            System.out.println("Your performance was excellent. I'm proud of you.");
                                        }

                                    }
                                    break;

                                default:
                                    live = false;
                                    break;

                            }
                        }
                        while (live) ;

                        break;
                        case 2:
                            counter = false;
                            break;
                        default:
                            break;
                    }


        }while(counter);

    }
}
