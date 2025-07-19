import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={`flex min-w-full gap-4`}
        style={{
          transform: `translateX(${direction === "left" ? "-" : ""}${isPaused ? contentWidth / 4 : 0}px)`,
          animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

interface ReviewCardProps {
  avatar: string;
  name: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ avatar, name, rating, review }: ReviewCardProps) => (
  <motion.div 
    className="w-80 p-4 bg-card rounded-lg border border-border shadow-sm"
    whileHover={{ 
      y: -5,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 }
    }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <motion.img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      />
      <div>
        <h3 className="font-medium text-foreground">{name}</h3>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <Star
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground">{review}</p>
  </motion.div>
);

// Demo Component
export default function MarqueeDemo() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "Domnic's work is exceptional! The attention to detail and quality of the code is top-notch. Highly recommend!",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      review:
        "Great experience working with Dominic. The project was delivered on time and exceeded my expectations.",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Dominic is a talented developer! The features implemented were exactly what we needed, and the communication was excellent.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "I had a great experience working with Dominic. The project was well-organized and the results were impressive.",
    },
  ];

  return (
    <motion.div 
      className="bg-background p-8 flex flex-col gap-8 items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-2">
          <motion.h2 
            className="text-2xl font-semibold text-center text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            References
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Marquee direction="left" className="py-4" speed={30}>
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  avatar={review.avatar}
                  name={review.name}
                  rating={review.rating}
                  review={review.review}
                />
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
