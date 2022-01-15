function canExecuteFastAttack(knightIsAwake){
  return !knightIsAwake;
}
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
};
function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
  return prisonerIsAwake && !archerIsAwake; 
}
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
  return ((prisonerIsAwake && !knightIsAwake && !archerIsAwake) || (!archerIsAwake && petDogIsPresent))
} 

/* Rules: The game's main character is Kashii, a brave girl with a fierce and loyal pet dog. Unfortunately, disaster strikes, as her best friend was kidnapped while searching for berries in the forest. Annalyn will try to find and free her best friend, optionally taking her dog with her on this quest.

After some time spent following her best friend's trail, she finds the camp in which her best friend is imprisoned. It turns out there are two kidnappers: a mighty knight and a cunning archer.

Having found the kidnappers, Kashii considers which of the following actions she can engage in:

Fast attack: a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on, so he will be vulnerable.

Spy: the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.
Signal prisoner: the prisoner can be signalled using bird sounds if the prisoner is awake and the archer is sleeping, as archers are trained in bird signaling so they could intercept the message.

Free prisoner: Annalyn can try sneaking into the camp to free the prisoner. This is a risky thing to do and can only succeed in one of two ways:
If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.

If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer. */
