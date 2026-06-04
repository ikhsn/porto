import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import CaseStudies from "@/pages/case-studies";
import CaseStudyPayments from "@/pages/case-studies/payments-strategy";
import CaseStudyInsuranceRPA from "@/pages/case-studies/insurance-rpa";
import CaseStudyHRCompliance from "@/pages/case-studies/hr-ai-compliance";
import CaseStudyPaymentOps from "@/pages/case-studies/payment-ops-optimization";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/payments-strategy" component={CaseStudyPayments} />
      <Route path="/case-studies/insurance-rpa" component={CaseStudyInsuranceRPA} />
      <Route path="/case-studies/hr-ai-compliance" component={CaseStudyHRCompliance} />
      <Route path="/case-studies/payment-ops-optimization" component={CaseStudyPaymentOps} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;