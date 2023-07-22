import React from "react";
import RestaurantCard from "./RestaurantCard";

function Body() {
  const RestaurantList = [
    {
      info: {
        id: "24441",
        name: "Domino's Pizza",
        cloudinaryImageId: "pxddqgxq1wyecxk8orpe",
        locality: "Suratwala Mark Plazo",
        areaName: "Hinjawadi",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "24441",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "2456",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 00:15:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-suratwala-mark-plazo-hinjawadi-pune-24441",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "237669",
        name: "McDonald's",
        cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
        locality: "Blue Ridge Township",
        areaName: "Hinjawadi",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "237669",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-blue-ridge-township-hinjawadi-pune-237669",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "89140",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Wakad Road",
        areaName: "Hinjawadi",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "89140",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "547",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-wakad-road-hinjawadi-pune-89140",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "253596",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Service Road",
        areaName: "Tathawade",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "253596",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "166",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 4.8,
          serviceability: "SERVICEABLE",
          slaString: "34 mins",
          lastMileTravelString: "4.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 03:40:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-service-road-tathawade-pune-253596",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "289340",
        name: "BOX8 - Desi Meals",
        cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
        locality: "Blue Ridge",
        areaName: "Hinjawadi",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "289340",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "10655",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "29-39 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 02:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/box8-desi-meals-blue-ridge-hinjawadi-pune-289340",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "197247",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "zpgeoldqmfxquxvizvfd",
        locality: "2nd Phase",
        areaName: "Wakad",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "197247",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "2233",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-2nd-phase-wakad-pune-197247",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "363836",
        name: "Theobroma",
        cloudinaryImageId: "q4ednmpnces3bzr1dwes",
        locality: "Kunal Icon Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹500 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "363836",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 6400,
        },
        parentId: "1040",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 6.1,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "6.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/theobroma-kunal-icon-road-pimple-saudagar-pune-363836",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "3417",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Blue Ridge Township",
        areaName: "Hinjawadi",
        costForTwo: "₹350 for two",
        cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "3417",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "2",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-blue-ridge-township-hinjawadi-pune-3417",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "261405",
        name: "Faasos - Wraps & Rolls",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Bhatewara nagar",
        areaName: "Hinjawadi",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "261405",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "21809",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 03:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-bhatewara-nagar-hinjawadi-pune-261405",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "27807",
        name: "Natural Ice Cream",
        cloudinaryImageId: "iservsmulhi2ifzmxvco",
        locality: "Wakd Road",
        areaName: "Hinjawadi",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        feeDetails: {
          restaurantId: "27807",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "2093",
        avgRatingString: "4.6",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/natural-ice-cream-wakd-road-hinjawadi-pune-27807",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "156444",
        name: "The Good Bowl",
        cloudinaryImageId: "cocs5poe5n7xbekkgamo",
        locality: "Choudhary Park",
        areaName: "Wakad",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "156444",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "7918",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-good-bowl-choudhary-park-wakad-pune-156444",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "427774",
        name: "Chaayos Chai+Snacks=Relax",
        cloudinaryImageId: "2beebd3688e63e027ee8a11c1c8a72c8",
        locality: "Maan Road",
        areaName: "Hinjawadi",
        costForTwo: "₹250 for two",
        cuisines: [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "427774",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "281782",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "18 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-maan-road-hinjawadi-pune-427774",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "89750",
        name: "CakeZone",
        cloudinaryImageId: "dc7abc110dbafe0a9bad837a292842dc",
        locality: "Wakad Road",
        areaName: "Wakad Road",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "89750",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "7003",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/cakezone-wakad-road-pune-89750",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "64066",
        name: "NIC Ice Creams",
        cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
        locality: "Maan Road",
        areaName: "Hinjawadi",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "64066",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "6249",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 14,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "14 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nic-ice-creams-maan-road-hinjawadi-pune-64066",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "261406",
        name: "Behrouz Biryani",
        cloudinaryImageId: "hhqeczeagi9vxnpaptj5",
        locality: "Bhatewara nagar",
        areaName: "Hinjawadi",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "North Indian",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "261406",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "1803",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/behrouz-biryani-bhatewara-nagar-hinjawadi-pune-261406",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "261412",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "k0elldsxfhy9yjdmwprr",
        locality: "Bhatewara nagar",
        areaName: "Hinjawadi",
        costForTwo: "₹200 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "261412",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3100,
        },
        parentId: "4925",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹449",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-bhatewara-nagar-hinjawadi-pune-261412",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "14780",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Global Highstreet Mall",
        areaName: "Hinjawadi",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "14780",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "721",
        avgRatingString: "3.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-global-highstreet-mall-hinjawadi-pune-14780",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "9025",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Shankar Kalat Nagar",
        areaName: "Wakad",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.4,
        veg: true,
        feeDetails: {
          restaurantId: "9025",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "5588",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-23 05:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shankar-kalat-nagar-wakad-pune-9025",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "407291",
        name: "Taco Bell",
        cloudinaryImageId: "e7f40335a66b230f5eda766022dfecbd",
        locality: "Hinjewadi",
        areaName: "Hinjewadi",
        costForTwo: "₹300 for two",
        cuisines: ["Mexican"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "407291",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "1557",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/taco-bell-hinjewadi-pune-407291",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "3168",
        name: "Eatsome- Wraps & Rolls",
        cloudinaryImageId: "e56240a4b58956f47a5a1f8392470fbe",
        locality: "Shankar Kalat Nagar",
        areaName: "Wakad",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "Street Food",
          "Biryani",
          "Snacks",
          "Beverages",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "3168",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "355",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-07-22 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/eatsome-wraps-and-rolls-shankar-kalat-nagar-wakad-pune-3168",
        type: "WEBLINK",
      },
    },
  ];
  return (
    <div className="restaurantList">
      {RestaurantList.map((restaurant) => {
        return <RestaurantCard restaurant={restaurant} key={restaurant.info.id}/>;
      })}
    </div>
  );
}

export default Body;
