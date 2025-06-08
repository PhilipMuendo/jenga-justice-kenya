
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText, Phone, Users, MapPin } from "lucide-react";
import IncidentReportForm from "@/components/IncidentReportForm";
import CaseTracker from "@/components/CaseTracker";
import ResourceCenter from "@/components/ResourceCenter";
import EmergencyContacts from "@/components/EmergencyContacts";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "report":
        return <IncidentReportForm onBack={() => setActiveTab("dashboard")} />;
      case "track":
        return <CaseTracker onBack={() => setActiveTab("dashboard")} />;
      case "resources":
        return <ResourceCenter onBack={() => setActiveTab("dashboard")} />;
      case "emergency":
        return <EmergencyContacts onBack={() => setActiveTab("dashboard")} />;
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
              <Shield className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Police Brutality Reporting Platform</h1>
              <p className="text-xl mb-2">Empowering Kenyan Citizens to Report and Track Police Misconduct</p>
              <p className="text-blue-100">Your safety is our priority. All reports can be made anonymously.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-muted-foreground">Reports Filed</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold">892</div>
                  <div className="text-sm text-muted-foreground">Cases Resolved</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <div className="text-2xl font-bold">355</div>
                  <div className="text-sm text-muted-foreground">Under Investigation</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold">15,643</div>
                  <div className="text-sm text-muted-foreground">Citizens Helped</div>
                </CardContent>
              </Card>
            </div>

            {/* Main Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("report")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    Report an Incident
                  </CardTitle>
                  <CardDescription>
                    File a report about police misconduct. All reports are secure and can be anonymous.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Submit Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("track")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Track Your Case
                  </CardTitle>
                  <CardDescription>
                    Check the status of your submitted report and view updates from authorities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Track Case
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Resources and Emergency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("resources")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Legal Resources
                  </CardTitle>
                  <CardDescription>
                    Access legal information, know your rights, and find support organizations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    View Resources
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab("emergency")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-orange-600" />
                    Emergency Contacts
                  </CardTitle>
                  <CardDescription>
                    Important phone numbers for immediate help and support services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Emergency Help
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Safety Notice */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <Shield className="h-5 w-5" />
                  Safety & Privacy Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-700">
                <p className="mb-2">
                  Your safety is our top priority. This platform uses end-to-end encryption and allows anonymous reporting.
                </p>
                <p>
                  If you're in immediate danger, please call emergency services directly at <strong>999</strong> or <strong>911</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">PBR Kenya</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant={activeTab === "dashboard" ? "default" : "ghost"} 
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </Button>
              <Button 
                variant={activeTab === "report" ? "default" : "ghost"} 
                onClick={() => setActiveTab("report")}
              >
                Report
              </Button>
              <Button 
                variant={activeTab === "track" ? "default" : "ghost"} 
                onClick={() => setActiveTab("track")}
              >
                Track
              </Button>
              <Button 
                variant={activeTab === "resources" ? "default" : "ghost"} 
                onClick={() => setActiveTab("resources")}
              >
                Resources
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About PBR Kenya</h3>
              <p className="text-gray-300">
                A platform dedicated to promoting police accountability and protecting citizen rights in Kenya.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Know Your Rights</li>
                <li>Legal Support</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <p className="text-gray-300 mb-2">Police Emergency: 999</p>
              <p className="text-gray-300 mb-2">Medical Emergency: 911</p>
              <p className="text-gray-300">Legal Aid Hotline: 0800-123-456</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Police Brutality Reporting Kenya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
