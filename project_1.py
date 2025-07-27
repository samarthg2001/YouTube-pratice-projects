import random as ra

item_list=["Rock","Paper","Scissor"]
com_choice=ra.choice(item_list)
while(True):
    user_choice=input("Enter your move =Rock,Paper ,Scissor= ")
    if user_choice == com_choice:
        print("Both chooses same : = Match tie")
        break
    elif user_choice=="Rock":
        if com_choice== "Paper":
            print("Paper Cover Rock = Computer Win")
        else:
            print("Rock smashes Scissor =You win")
        break
    elif user_choice =="Scissor":
        if com_choice=="Rock":
            print("Rock Break the Scissor : Rock Win")
        else:
            print("Scissor Cuts Paper : Scissor Win")
        break
    elif user_choice=="Paper":
        if com_choice=="Scissor":
            print("Scissor Cuts Paper : Scissor Win")
        else:
            print("Paper Cover Rock = Computer Win")
        break
    else:
        print("Choose amoung :Rock , Paper , Scissor")
print(f"user choice = {user_choice}, Computer choice = {com_choice}")