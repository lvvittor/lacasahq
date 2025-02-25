import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Mission = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16 px-6 md:space-y-32">
        <div className="mx-auto grid max-w-lg gap-6 md:gap-12">
          <span className="text-muted-foreground text-sm">Our Story</span>
          <h2 className="text-4xl font-medium">
            A house for international, exceptional engineers
          </h2>
          <div className="space-y-6">
            <p>
              We're organizing a house for students and recent grads from around
              the world, making the Silicon Valley experience accessible to
              exceptional young engineers. As founders from Paraguay and
              Argentina, we've seen incredible talent go unnoticed abroad and
              are dedicated to creating opportunities for them here.
            </p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
