/* Notice how we've changed the data model for filters
to make managing the state of the selected filters and the
conditional rendering of our hotels easier. */
export const filterOptions = [
  { display: "Free Cancellation", key: "hasFreeCancellation" },
  { display: "Breakfast Included", key: "includesBreakfast" },
  { display: "Bestsellers", key: "isBestSeller" },
  { display: "Parking", key: "hasParking" },
  { display: "Pets Allowed", key: "allowsPets" },
  { display: "Room Service", key: "hasRoomService" },
  { display: "Fitness Centre", key: "hasFitnessCenter" }
];

export const hotels = [
  {
    id: 123,
    name: "Ruby International Hotel",
    rating: 8.3,
    reviewCount: 2393,
    pricePerNight: 308.34,
    imageSrc:
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-photo-164595.jpeg",
    roomsRemaining: 9,
    hasFreeCancellation: true,
    includesBreakfast: true,
    isBestSeller: false,
    hasParking: false,
    allowsPets: false,
    hasRoomService: false,
    hasFitnessCenter: false
  },
  {
    id: 124,
    name: "Hotel Jackson",
    rating: 5.6,
    reviewCount: 40642,
    pricePerNight: 240.0,
    imageSrc:
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-castorly-stock-3682238-scaled.jpg",
    roomsRemaining: 22,
    hasFreeCancellation: false,
    includesBreakfast: true,
    isBestSeller: true,
    hasParking: true,
    allowsPets: false,
    hasRoomService: true,
    hasFitnessCenter: true
  },
  {
    id: 125,
    name: "Atom Suites Hotel",
    rating: 8.7,
    reviewCount: 5301,
    pricePerNight: 314,
    imageSrc:
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-engin-akyurt-2725675-scaled.jpg",
    roomsRemaining: 2,
    hasFreeCancellation: false,
    includesBreakfast: false,
    isBestSeller: true,
    hasParking: true,
    allowsPets: false,
    hasRoomService: false,
    hasFitnessCenter: true
  },
  {
    id: 126,
    name: "JS Plaza Hotel",
    rating: 7.7,
    reviewCount: 1519,
    pricePerNight: 427,
    imageSrc:
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-pixabay-271619-scaled.jpg",
    roomsRemaining: 14,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: false,
    hasParking: false,
    allowsPets: true,
    hasRoomService: false,
    hasFitnessCenter: true
  },
  {
    id: 127,
    name: "State Street Hotel",
    rating: 8.5,
    reviewCount: 1271,
    pricePerNight: 289,
    imageSrc:
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2020/11/pexels-photo-545034.jpeg",
    roomsRemaining: 8,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: false,
    hasParking: true,
    allowsPets: false,
    hasRoomService: true,
    hasFitnessCenter: false
  }
];
