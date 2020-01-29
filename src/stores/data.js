import { observable } from 'mobx';

export default class Data {
  @observable data = [
    {
      id: '1',
      title: 'Accident',
      subtitle: 'A father and his 10-year-old daughter have died in a house fire in Hull.',
      description: `Emergency services were called to Wensley Avenue at around 7.50am on Saturday morning to reports of the blaze. 

      The man was pronounced dead at the scene and the child, who police originally said was eight, was rushed to hospital, where she died. 
      
      A statement from Humberside Police said: "Humberside Fire and Rescue, ambulance and police were called at 7.50am today to reports of a fire at a house. Emergency services worked to extinguish the fire and get the occupants out of the building
      
      "Tragically two people have died in the fire. A man was pronounced dead at the scene and an eight year-old girl, who had been taken to hospital, has sadly died."
      
      Police said officers remain on the scene while emergency services work to establish the cause of the fire.
      
      A spokesman for the force later added: "We pulled out an adult male, and what we now know is his 10-year-old daughter, and tragically both lives were lost to the fire.
      
      "We're working with police colleagues on the scene. We have got fire investigation officers there who will be working tirelessly throughout today."
      
      He added the father and daughter were the only two people in the property at the time of the blaze.` 
    },
    {
      id: '2',
      title: 'Murder',
      subtitle: 'Two chared with manslaugher after death of Town footballer Loya Noreos',
      description: `The Matlock Town midfielder, 25, died in hospital on Saturday after suffering a suspected fractured skull in an assault in the centre of Retford.

      Officers were called at around 2am to help ambulance crews who were attempting to treat Mr Sinnott after he was found unconscious in the town’s Market Place.
      
      Nottinghamshire Police has now said Cameron Matthews, 21, and Kai Denovan, 22, both from Retford, have been charged with manslaughter as well as affray and common assault.`,
    },
    {
      id: '3',
      title: 'Theft',
      subtitle: `Man spotted on camera walking into church, steals a bag during service Read more: https://www.legit.ng/1259935-man-spotted-camera-walking-church-steals-a-bag-service-video.html
      `,
      description: `A trending video of a church thief has left many Nigerians perplexed after it emerged on social media. The video captured a man stealing an unsuspecting victim's bag during a church service. The video was said to have been taken from the CCTV of an Anglican church in Lagos state, where the incident occurred. In the video, the man was seen walking into the church without holding any bag. He was spotted entering the church while service was going and he stood in front of a bench pretending to be a member.`,
    },
  ];
  geo_point = null;

  markers(location) {
    console.log(Math.random() * 0.01);
    return this.data.map(item => {
      item.geo_point = {
        latitude: location.latitude - Math.random() * 0.0018,
        longitude: location.longitude - Math.random() * 0.0016 
      };
      return item;
    });
  }

  getCrime(id) {
    const found = this.data.find(item => item.id === id);
    return found;
  }

}