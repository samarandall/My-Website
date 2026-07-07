import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/card-content";
import { FeatureCardModel } from "@/types/types";

export default function FeatureCards({ cards }: { cards: FeatureCardModel[] }) {
  return (
    <div
      className="mt-10 grid gap-4 md:grid-cols-3"
    >
      {cards.map((c) => {
        const Icon = c.icon;

        return (
          <div key={c.title} className="reveal">
            <Card>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold tracking-tight">{c.title}</div>
                    <div className="text-xs text-white/60">What I focus on</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70">{c.desc}</p>

                <Button href={c.cta.href} variant="ghost" className="mt-4 px-0">
                  {c.cta.label} <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

