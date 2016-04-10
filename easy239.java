/*
**CHALLENGE DESCRIPTION**
Full details of this challenge can be found at: https://www.reddit.com/r/dailyprogrammer/comments/3r7wxz/
My code and the output can be viewed here: http://ideone.com/Ybgjug

The input is a single number: the number at which the game starts. Write a program that plays the Threes 
game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as 
the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), 
or 0 (if you are just dividing). The last line should simply be 1.

**INPUT DESCRIPTION**
The input is a single number: the number at which the game starts. 100

**OUTPUT DESCRIPTION**
The output is a list of valid steps that must be taken to play the game. 
Each step is represented by the number you start at, followed by either -1 or 1 
(if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). 
The last line should simply be 1.

**EXAMPLE OUTPUT**
100 -1
33 0
11 1
4 -1
1


*/

class easy239{
public static void main (String[] args){

 int x=100;
         
     while(x>1){
         int i = (-x-1) %3 +1;
         System.out.println(x + ", " + i);
         x = (x + i) / 3;
     }
 System.out.println("1");       
}
}
