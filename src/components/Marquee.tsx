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
          animationName: `scroll-${direction}`,
          animationDuration: `${contentWidth / speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
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
      name: "Sarah Mitchell",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "Dominic's technical expertise and leadership skills are exceptional. He consistently delivers high-quality solutions and mentors junior developers effectively.",
    },
    {
      id: 2,
      name: "James Robertson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      review:
        "Working with Dominic has been a pleasure. His ability to translate complex requirements into elegant solutions is remarkable. Highly recommend!",
    },
    {
      id: 3,
      name: "Emma Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Dominic led our award-winning project with incredible vision and organization. His project management and communication skills are top-tier.",
    },
    {
      id: 4,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      review:
        "An outstanding developer and natural leader. Dominic's innovative approaches to problem-solving have significantly improved our development processes.",
    },
    {
      id: 5,
      name: "Dr. Alex Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      rating: 5,
      review:
        "Dominic demonstrates exceptional academic performance while balancing professional responsibilities. A true example of excellence in both theory and practice.",
    },
    {
      id: 6,
      name: "Lisa Park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
      rating: 5,
      review:
        "His automation solutions have transformed our marketing processes. Dominic combines technical skill with business acumen perfectly.",
    }
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
            Professional Testimonials
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
