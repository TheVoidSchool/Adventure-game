import java.util.Scanner;

class Main {
  static int level;
  static int Strength;
  static int Dexterity;
  static int Constitution;
  static int Wisdom;
  static int Intelligence;
  static int Luck;
  static int statPoints;
  static int XP;
  static int total;
  public static void main(String[] args) {
    level = 1;
    Strength = 1;
    Dexterity = 1;
    Constitution = 1;
    Wisdom = 1;
    Intelligence = 1;
    statPoints  = 3;
    Navigate.main(args);
  }
}

class levelUp{
  public static void main(String[] args) {
    Main.level += 1;
    Main.statPoints += 3;
    System.out.println("You are now level: " + Main.level);
  }
}

class EX{
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush(); 
    Scanner myObj = new Scanner(System.in);
    String userName = myObj.nextLine();
  }
}

class Navigate{
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush(); 
    Scanner myObj = new Scanner(System.in);
    System.out.println("Where should i go?");
    System.out.println("1. Town");
    System.out.println("2. Stat Screen");
    System.out.println("3. Plains");
    System.out.println("4. Inventory");
    String Location = myObj.nextLine();

    System.out.println("going to: " + Location);
    if(Location.equals("Town") || Location.equals("1")){
      Town.main(args);
    }
    if(Location.equals("Stat Screen") || Location.equals("2")){
      upStat.main(args);
    }
    if(Location.equals("Plains") || Location.equals("3")){
      Plains.main(args);
    }
    if(Location.equals("Inventory") || Location.equals("4")){
      Inventory.main(args);
    }
    Navigate.main(args);
  }
}

class Fight{
  static String biome;
  static String enemy;
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush();
    int HP = Main.Constitution * 10;
    int HPR = Main.Constitution / 2;
    int MP = Main.Intelligence * 10;
    int MPR = Main.Wisdom;
    int Damage = Inventory.weapon * Main.Strength;
    int Dodge = Main.Dexterity / 5; 
    int Crit = Main.Luck / 10 ;
    int CritD = Main.Strength * 100;
    int attackSpeed = Main.Dexterity / 10;
    int defense = Inventory.armor;

    for (int i = Main.total; i != 0; i--) {
    System.out.println("i");
    }

    int EHP = Main.Constitution * 10;
    int EHPR = Main.Constitution / 2;
    int EMP = Main.Intelligence * 10;
    int EMPR = Main.Wisdom;
    int EDamage = (Main.Strength * 2) / 3;
    int EDodge = Main.Dexterity / 5; 
    int ECrit = Main.Luck / 10 ;
    int ECritD = Main.Strength * 100;
    int EattackSpeed = Main.Dexterity / 10;
    int Edefense = Main.Constitution/3;

    if(biome.equals("Plains")){
      enemy = "Slime";
    }
    else{Navigate.main(args);}

    Scanner myObj = new Scanner(System.in);
    System.out.println("Your enemy is a " + enemy);
    System.out.println("Press enter to start the fight!");
    String userName = myObj.nextLine();

    int round = 0;

    while(EHP > 0 || HP > 0){
      round += 1;
      EHP -= Damage - Edefense;
      HP -= EDamage - defense;
      EMP -= EDamage / 2;
      MP -= Damage / 2;
      System.out.println("You have " + HP + " HP remaining");
      System.out.println("You have " + MP + " MP remaining");
      HP += HPR;
      MP += MPR;
      EMP += EMPR;
      System.out.println("You now have " + HP + " HP");
      System.out.println("You now have " + MP + " MP");
      if(HP > Main.Constitution * 10){
        HP = Main.Constitution * 10;
      }
      if(EHP > Main.Constitution){
        EHP = Main.Constitution * 10;
      }
      System.out.println("Round: " + round);
    }

    if(HP > 0){
      Main.XP += EDamage;
      Inventory.ore += EMP / 3;
    }

    Navigate.main(args);
  }
}

class upStat{
  static int i;
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush(); 
    Scanner myObj = new Scanner(System.in);
    System.out.println("Which stat should i increase?");
    System.out.println("Your current stats are:");
    System.out.println("Level: " + Main.level);
    System.out.println("XP: " + Main.XP);
    System.out.println("STR: " + Main.Strength);
    System.out.println("DEX: " + Main.Dexterity);
    System.out.println("CON: " + Main.Constitution);
    System.out.println("WIS: " + Main.Wisdom);
    System.out.println("INT: " + Main.Intelligence);
    System.out.println("Luck: " + Main.Luck);
    System.out.println("and you have " + Main.statPoints + " points left");
    String Stat = myObj.nextLine();
    Scanner myObj2 = new Scanner(System.in);
    System.out.println("by how much? (must be a number)");
    String Ammount = myObj2.nextLine();
    try {
      i = Integer.parseInt(Ammount);
    } catch (NumberFormatException e) {
      Navigate.main(args);
    }

    System.out.println(Stat);
    System.out.println(i);

    if(Stat.equals("Strength") || Stat.equals("str") || Stat.equals("STR") || Stat.equals("1")){
      if(Main.statPoints >= i){
        Main.Strength += i;
        Main.statPoints -= i;
      }
      System.out.println("Strength is: " + Main.Strength);
      System.out.println("You have " + Main.statPoints + " stat points left");
      Navigate.main(args);
    }
    if(Stat.equals("Dexterity") || Stat.equals("dex") || Stat.equals("DEX") || Stat.equals("2")){
      if(Main.statPoints >= i){
        Main.Dexterity += i;
        Main.statPoints -= i;
      }
      System.out.println("Dexterity is: " + Main.Dexterity);
      System.out.println("You have " + Main.statPoints + " stat points left");
      Navigate.main(args);
    }
    if(Stat.equals("Constitution") || Stat.equals("con") || Stat.equals("CON") || Stat.equals("3")){
      if(Main.statPoints >= i){
        Main.Constitution += i;
        Main.statPoints -= i;
      }
      System.out.println("Constitution is: " + Main.Constitution);
      System.out.println("You have " + Main.statPoints + " stat points left");
      Navigate.main(args);
    }
    if(Stat.equals("Wisdom") || Stat.equals("wis") || Stat.equals("WIS") || Stat.equals("4")){
      if(Main.statPoints >= i){
        Main.Wisdom += i;
        Main.statPoints -= i;
      }
      System.out.println("Wisdom is: " + Main.Wisdom);
      System.out.println("You have " + Main.statPoints + " stat points left");
      Navigate.main(args);
    }
    if(Stat.equals("Intelligence") || Stat.equals("int") || Stat.equals("INT") || Stat.equals("5")){
      if(Main.statPoints >= i){
        Main.Intelligence += i;
        Main.statPoints -= i;
      }
      System.out.println("Intelligence is: " + Main.Intelligence);
      System.out.println("You have " + Main.statPoints + " stat points left");
      Navigate.main(args);
    }
    if(Stat.equals("Luck") || Stat.equals("luc") || Stat.equals("LUC") || Stat.equals("6")){
      if(Main.statPoints >= i){
        Main.Luck += i;
        Main.statPoints -= i;
      }
      System.out.println("Luck Stat is: " + Main.Luck);
      System.out.println("You have " + Main.statPoints + " stat points left");
    }
    Main.total = Main.Strength + Main.Dexterity + Main.Constitution + Main.Intelligence + Main.Wisdom + Main.Luck;
    Navigate.main(args);
  }
}
//Good Job
class Town{
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush(); 
    System.out.println("now in Town");
    Scanner myObj = new Scanner(System.in);
    System.out.println("Where do you want to go?");
    System.out.println("1. Weapon Shop");
    System.out.println("2. Armor Shop");
    String Place = myObj.nextLine();

    System.out.println("going to: " + Place);

    if(Place.equals("Back")){
      Navigate.main(args);
    }

    if(Place.equals("Weapon Shop") || Place.equals("1") || Place.equals("weapon shop")){
      weaponShop.main(args);
    }
    if(Place.equals("Armor Shop") || Place.equals("2") || Place.equals("armor shop")){
      armorShop.main(args);
    }
    Navigate.main(args);
  }
}

class armorShop{
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush(); 
    System.out.println("now in Armor Shop");
    Scanner myObj = new Scanner(System.in);
    System.out.println("What type of armor would you like?");
    System.out.println("1. Plate Mail");
    String Armor = myObj.nextLine();

    if(Armor.equals("Plate Mail") || Armor.equals("1")){
      Scanner myObj1 = new Scanner(System.in);
      System.out.println("How much ore should i use?");
      String Ore = myObj.nextLine();
      int i = Integer.parseInt(Ore);
      if (i >= Inventory.ore) {
        Inventory.armor = i * 2;
        Inventory.armorType = Armor;
      }
    Town.main(args);
  }
}
}

class weaponShop{
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush(); 
    System.out.println("now in Weapon Shop");
    Scanner myObj = new Scanner(System.in);
    System.out.println("What type of weapon would you like?");
    System.out.println("1. Sword");
    String Weapon = myObj.nextLine();

    if(Weapon.equals("Sword") || Weapon.equals("1")){
      Scanner myObj1 = new Scanner(System.in);
      System.out.println("How much ore should i use?");
      String Ore = myObj.nextLine();
      int i = Integer.parseInt(Ore);
      if (i >= Inventory.ore) {
        Inventory.weapon = i * 2;
        Inventory.weaponType = Weapon;
      }
      Town.main(args);
    }
  }
}

class Inventory{
  static int weapon = 1;
  static int armor = 1;
  static int ore;
  static int ingredients;
  static String weaponType = "Sword";
  static String armorType = "Plate Mail";
  public static void main(String[] args) {
    System.out.print("\033[H\033[2J");  
    System.out.flush();
    System.out.println("you have " + ore + " ore");
    System.out.println("you have " + ingredients + " ingredients");
    System.out.println(weaponType);
    System.out.println(armorType);

    Scanner myObj = new Scanner(System.in);
    System.out.println("press any key to exit");
    String exit = myObj.nextLine();
  }
}

class Spell{
  static int spell1 = Main.Intelligence / 2;
  public static void main(String[] args) {
    
  }
}

class Plains{
  static int depth = 1;
  public static void main(String[] args) {
    Fight.biome = "Plains";
    System.out.print("\033[H\033[2J");  
    System.out.flush();  
    System.out.println("now in plains");
    Scanner myObj = new Scanner(System.in);
    System.out.println("you are now on level " + depth + " of the plains");
    System.out.println("Would you like to go deeper?");
    System.out.println("1. Yes");
    System.out.println("2. No");
    String Option = myObj.nextLine();
    if(Option.equals("Yes") || Option.equals("1")){
      depth += 1;
      Plains.main(args);
    }
    if(Option.equals("No") || Option.equals("2")){
      Interact(args);
    }
  }

  public static void Interact(String[] args){
    System.out.print("\033[H\033[2J");  
    System.out.flush();
    Scanner myObj = new Scanner(System.in);
    System.out.println("Would you like to look for enemys or ingredients?");
    System.out.println("1. Enemies");
    System.out.println("2. ingredients");
    String Option = myObj.nextLine();

    if(Option.equals("Enemies") || Option.equals("1")){
      Fight.main(args);
    }
    if(Option.equals("ingredients") || Option.equals("2")){
      int random = (int) (Math.random()*10) + 1;
      if(random <= 9){
        Inventory.ingredients += Main.Dexterity;
      }
      if(random == 10){
        Fight.main(args);
      }
    }
  }
}

class Woods{
  public static void main(String[] args) {
    
  }
}

class Swamp{
  public static void main(String[] args) {
    
  }
}

class Mountins{
  public static void main(String[] args) {
    
  }
}

class Mines{
  public static void main(String[] args) {
    
  }
}

class Enemies{
  public static void main(String[] args) {
    
  }
}
