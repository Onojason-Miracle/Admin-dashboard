"use client";

interface Review {
  id: number;
  name: string;
  message: string;
  time: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Jane Doe",
    message: "The food was great! I loved the packaging.",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Michael Lee",
    message: "Quick delivery and tasty meal. Will order again.",
    time: "5 hours ago",
  },
  {
    id: 3,
    name: "Sara Smith",
    message: "Good service but my fries were cold 😕.",
    time: "1 day ago",
  },
];

const Reviews = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6 w-full lg:w-[90%] lg:mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Latest Reviews</h2>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="border-b pb-4 last:border-none">
            <div className="flex items-start gap-4">
              {/* Avatar placeholder (initials) */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                {review.name.split(" ").map((n) => n[0]).join("")}
              </div>
              {/* Review content */}
              <div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-gray-600 text-sm">{review.message}</p>
                <span className="text-xs text-gray-400">{review.time}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
