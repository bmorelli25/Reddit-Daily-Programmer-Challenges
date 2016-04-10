/*
**CHALLENGE DESCRIPTION**
Disemvoweling means removing the vowels from text. (For this challenge, the letters a, e, i, o, and u are considered vowels, and the letter y is not.) The idea is to make text difficult but not impossible to read, for when somebody posts something so idiotic you want people who are reading it to get extra frustrated.
To make things even harder to read, we'll remove spaces too.

**INPUT DESCRIPTION**
The input is a sentence: all those who believe in psychokinesis raise my hand

**EXAMPLE OUTPUT**
llthswhblvnpsychknssrsmyhnd
aoeoeieeioieiaiea

*/

import java.util.Scanner;//import for scanner
import static java.lang.System.*;//import for System.in and System.out

class easy149{

public static void main (String[] args){

    Scanner input = new Scanner("all those who believe in psychokinesis raise my hand");
    String s = input.nextLine();
    String [] letters = s.split("");
    
    String vowels = "aAeEiIoOuU";
    String vowString = "";
    String conString = "";
    
    for (int i = 0;  i < s.length(); i++){
    	if(vowels.contains(letters[i])) vowString +=letters[i];
    	else if(!letters[i].contains(" ")) conString +=letters[i];
    }
    System.out.println(conString);
    System.out.println(vowString);
}
}