const reviews = [
  {
    header: '"Really like Meaningful Planet :)"',
    content: "I'm very new to this mobile network but I really like it so far, their ethics and environmental commitment are excellent and the customer service has been really good, Nick was really helpful when I had trouble moving my old number :)",
    author: "Faye B",
    backgroundColor: "#ef767a",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66e9e16391fdd986e907ef51",
  },
  {
    header: '"Better price while also contributing to doing some good in the world."',
    content: "Switching over to meaningful planet was so quick and easy, Nick and Jamie were both really helpful answering any questions I had and making sure everything went smoothly. I get the same network coverage as I did before (I was with EE) but for a much better monthly price while also contributing to doing some good in the world. Will be recommending to everyone.",
    author: "Pip Y",
    backgroundColor: "#feb865",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66ab7400d34624b5b913bcd8",
  },
  {
    header: '"Switch was super simple and quick and kept my 20 year old number!"',
    content: "First time switching service - What took me so long?! Well I guess it was finding a deal that aligns with my values and Meaningful Planet provided that. Making the switch was super simple and quick and enabled me to keep my 20 year old number. My new coverage is far better that my previous one (live in London). It's a no-brainer",
    author: "Will B",
    backgroundColor: "#063412",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66a398e5a3bdc90573e22bed",
  },
  {
    header: '"Great service from an ethical provider new to the market."',
    content: "Very responsive speedy process and no problems with the switching. Was already with an ethical provider (Co-op) so done lightly but absolutely no regrets and would encourage others to make this choice",
    author: "John P",
    backgroundColor: "#1a0030",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66a3f834c55a884df40f51d4",
  },
  {
    header: '"Excellent communication and support"',
    content: "Excellent, fast communication with support to transfer my sim and keep the same number. Love the ethos of the company, it aligns with my own values. It's a total win, win and I highly recommend them.",
    author: "Karen A",
    backgroundColor: "#feb865",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/6679ddf589ee6804b466727e",
  },
  {
    header: '"Made the switch."',
    content: "Made the switch. Great team. Great ethos. Great service. Good to know there is a better way.",
    author: "Pete E",
    backgroundColor: "#ef767a",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/6656f668f3ea42b2dc850760",
  },
  {
    header: '"Fantastic service, effective conservation and cheaper than EE!"',
    content: "Really happy to have discovered Meaningful Planet. It piggybacks EE's network, so the coverage is everything you'd expect from them, but with fantastic customer service and at a cheaper price too. 10% of all revenue goes to what look like genuinely effective conservation & restoration projects - no greenwashing here. Love the ethos and love the service!",
    author: "Toby K",
    backgroundColor: "#063412",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/663cd55e9d0d1be535fe6581",
  },
  {
    header: '"Great company and experience, glad I swapped over to them."',
    content: "Since swapping over to meaningful planet I have had a great experience. The procedure of swapping over was easy and stress free and I have had really good and consistent mobile service since. It's nice to be able to support a company which is trying to help the planet as well as recieving a quality product and service. I would highly recommend meaningful planet.",
    author: "Grant M",
    backgroundColor: "#1a0030",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66300cb993fe45fd61967227",
  },
  {
    header: '"Great mobile service."',
    content: "Great mobile service from a business who are actively trying to contribute something positive to the environment. Service has been flawless so far and moving from my old network was really fast.",
    author: "Myles T",
    backgroundColor: "#ef767a",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66267c3ee75958f22a2e3b96",
  },
  {
    header: '"Excellent service and cheaper than my present provider."',
    content: "Excellent service and cheaper than my previous provider and helping the planet in a meaningful way too. I am so happy to be part of something that is focussed on making a real difference to the environment and engaged in joining forces with providers who are targeted to achieve this in a real and impactful way while also getting great service",
    author: "Sian B",
    backgroundColor: "#feb865",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/662223bc0f934c6dfad92b5e",
  },
  {
    header: '"Really impressed. Great service start to finish."',
    content: "Moved from Vodafone to Meaningful Planet mainly because Vodafone had had network issues for over my 18 month contract and very rarely obtaining a 5G signal. So far I have found Meaningful Planet to be exceeding my expectations, helpful customer service, support with transferring my number and most importantly I actually have a constant 5G connection! Love the fact Meaningful Planet also contribute to restoring nature throughout the UK.",
    author: "James W",
    backgroundColor: "#063412",
    trustpilotUrl: "https://uk.trustpilot.com/reviews/66290a95762c476bf8d49cbc",
  },
  {
    header: '"Why would you not switch to them? It\'s a no-brainer!"',
    content: "I love the idea of being able to contribute to environmental projects simply by paying for my mobile plan. The SIM works even better than my previous one as it runs on the EE network, which has the best coverage in my area. The switching process was also super smooth. Why would you not switch to Meaningful Planet?",
    author: "Valerio M",
    backgroundColor: "#1a0030",
    trustpilotUrl: "https://uk.trustpilot.com/users/5ce57b2fffb9d3090d39bb7f",
  }
]


function createReviews() {
  const reviewsContainer = document.createElement("div");
  reviewsContainer.classList.add("reviews__container")
  reviewsContainer.classList.add("js-flickity")
  reviewsContainer.dataset.flickityOptions = '{ "wrapAround": true }'

  reviews.forEach(review => {
    let reviewElement = document.createElement("div");

    reviewElement.innerHTML = `
      <div class="reviews__review" style="background-color: ${review.backgroundColor};">
        <img class="reviews__rating" src="images/graphics/rating.png">
        <h3 class="reviews__header">${review.header}</h3>
        <p class="reviews__text">${review.content}</p>
        <p class="reviews__reviewer">${review.author}</p>
      </div>
    `

    reviewsContainer.appendChild(reviewElement);
  })

  document.querySelector(".reviews").appendChild(reviewsContainer);
}
