import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Resources and Downloads
          </h2>
          <p className="text-muted-foreground text-lg">
            Use this list to check if your items qualify as e-waste. For full details, refer to the official E-Waste (Management) Rules 2022 schedule.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 eco-shadow-lg border border-border">
            <div className="space-y-6">
              {/* E-Waste Item List Download */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">E-Waste Item List</h3>
                  <p className="text-sm text-muted-foreground">
                    A simplified list of items that qualify as e-waste for recycling.
                  </p>
                </div>
                {/* Placeholder path - update when PDF is uploaded */}
                <a
                  href="/e-waste-item-list.pdf"
                  download
                  className="w-full sm:w-auto"
                >
                  <Button variant="default" className="w-full sm:w-auto">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </a>
              </div>

              {/* Official Rules Link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Official E-Waste Rules 2022</h3>
                  <p className="text-sm text-muted-foreground">
                    View the complete E-Waste (Management) Rules 2022 schedule from CPCB.
                  </p>
                </div>
                <a
                  href="https://cpcb.nic.in/uploads/Projects/E-Waste/e-waste_rules_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4" />
                    View Rules
                  </Button>
                </a>
              </div>
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-primary/5 rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                Not sure if your item qualifies? WhatsApp us a photo and we'll let you know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;