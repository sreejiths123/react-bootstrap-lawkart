const questions = [
  {
    id: 1,
    name: "Brown question",
    description: "Brown T-question for I have a question",   
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/kOhL6k/img1.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 2,
    name: "Light Brown question",
    description: "Light Brown question for I have a question",    
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/nNmKz5/img2.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 3,
    name: "I have a question Grey question",
    description: "Grey question for I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/n6iMCQ/img3.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 4,
    name: "Warm question I have a question",
    description: "Woolen Hoodie I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/dVfORk/img4.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 5,
    name: "I have a question Grey question",
    description: "Light Grey question for I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/jpMxmk/img5.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 6,
    name: "I have a question Red/Brown question",
    description: "Red/Brown Blouse for I have a question",
    title: "I have a question",
    type: "blouse",
    img: "https://image.ibb.co/mJppz5/img6.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 7,
    name: "Dark Grey question I have a question",
    description: "Dark Grey question for I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/eZiSmk/img7.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 8,
    name: "White question I have a question",
    description: "White question for I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/dyCysQ/img8.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 9,
    name: "Black question I have a question",
    description: "Black question for I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/eOYre5/img10.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for I have a question",
    title: "I have a question",
    type: "question",
    img: "https://image.ibb.co/f6gcK5/img9.jpg",
    inCart: false,
    category: "criminal"
  },
  {
    id: 11,
    name: "I have a question Watch Gold",
    description: "Golden Watch for I have a question",
    title: "I have a question",
    type: "watch",
    img: "https://images.pexels.com/photos/69046/watch-wrist-watch-packshot-time-69046.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    inCart: false,
    category: "civil"
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for I have a question",
    title: "I have a question",
    type: "necklace",
    img: "https://images.pexels.com/photos/221550/pexels-photo-221550.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    inCart: false,
    category: "civil"
  },
  {
    id: 13,
    name: "Man Black question",
    description: "Black T-question for Men",
    title: "men",
    type: "question",
    img: "http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tquestion-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=",
    inCart: false,
    category: "criminal"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    title: "men",
    type: "question",
    img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tquestion-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
    inCart: false,
    category: "criminal"
  },
  {
    id: 15,
    name: "Man White question",
    description: "White question for Men",
    title: "men",
    type: "question",
    img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-question-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
    inCart: false,
    category: "criminal"
  },
  {
    id: 16,
    name: "Man Brown question",
    description: "Brown question for Men",
    title: "men",
    type: "question",
    img: "http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=",
    inCart: false,
    category: "criminal"
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    title: "men",
    type: "tie",
    img: "http://image.11st.my/g3/2/7/4/6/7/1/1274671_B_V5.jpg",
    inCart: false,
    category: "civil"
  },
  {
    id: 18,
    name: "Black question Men",
    description: "Black question for Men",
    title: "men",
    type: "question",
    img: "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-question-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
    inCart: false,
    category: "criminal"
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    title: "men",
    type: "tie",
    img: "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
    inCart: false,
    category: "civil"
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    title: "men",
    type: "tie",
    img: "http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg",
    inCart: false,
    category: "civil"
  },
];

export default questions;
