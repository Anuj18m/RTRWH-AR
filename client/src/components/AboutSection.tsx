import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for Indian Conditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced calculations follow CGWB guidelines and incorporate real Indian rainfall patterns, ensuring accurate results for every region.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Scientific Methodology Meets Local Expertise
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our tool combines Central Ground Water Board (CGWB) guidelines with region-specific rainfall data, 
              soil characteristics, and groundwater conditions. Every calculation is tailored to Indian climate 
              patterns, making it the most accurate rainwater harvesting assistant for Indian homes and communities.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">CGWB Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Scientific Methods</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-medium">Location Specific</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="font-medium">Community Focused</span>
              </div>
            </div>

            <Button variant="outline" size="lg" className="mt-6">
              Read More About Our Methodology
            </Button>
          </div>

          {/* Right: Visual */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-chart-1/10">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">India-Wide Coverage</h4>
              <p className="text-muted-foreground mb-6">
                Supporting all Indian states with region-specific calculations and climate data integration.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="font-semibold text-lg text-primary">28+</div>
                  <div className="text-muted-foreground">States Covered</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="font-semibold text-lg text-chart-1">800+</div>
                  <div className="text-muted-foreground">Cities Supported</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="font-semibold text-lg text-chart-2">100%</div>
                  <div className="text-muted-foreground">CGWB Guidelines</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="font-semibold text-lg text-green-600">Local</div>
                  <div className="text-muted-foreground">Climate Data</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}