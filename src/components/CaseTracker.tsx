
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface CaseTrackerProps {
  onBack: () => void;
}

const CaseTracker = ({ onBack }: CaseTrackerProps) => {
  const [caseId, setCaseId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  // Mock case data
  const mockCases = {
    "PBR-ABC123DEF": {
      id: "PBR-ABC123DEF",
      status: "Under Investigation",
      incidentType: "Excessive Force",
      reportDate: "2024-01-15",
      location: "Nairobi CBD",
      lastUpdate: "2024-01-20",
      updates: [
        {
          date: "2024-01-20",
          status: "Under Investigation",
          description: "Case has been assigned to the Independent Policing Oversight Authority (IPOA) for investigation."
        },
        {
          date: "2024-01-16",
          status: "Received",
          description: "Report received and initial review completed. Case file created."
        },
        {
          date: "2024-01-15",
          status: "Submitted",
          description: "Report submitted successfully."
        }
      ]
    },
    "PBR-XYZ789GHI": {
      id: "PBR-XYZ789GHI",
      status: "Resolved",
      incidentType: "Unlawful Arrest",
      reportDate: "2023-12-10",
      location: "Mombasa",
      lastUpdate: "2024-01-05",
      updates: [
        {
          date: "2024-01-05",
          status: "Resolved",
          description: "Investigation completed. Officer disciplinary action taken. Compensation awarded to complainant."
        },
        {
          date: "2023-12-20",
          status: "Under Investigation",
          description: "Witness statements collected. Body camera footage reviewed."
        },
        {
          date: "2023-12-12",
          status: "Received",
          description: "Case assigned to investigating officer."
        },
        {
          date: "2023-12-10",
          status: "Submitted",
          description: "Report submitted successfully."
        }
      ]
    }
  };

  const handleSearch = () => {
    const foundCase = mockCases[caseId as keyof typeof mockCases];
    if (foundCase) {
      setSearchResult(foundCase);
    } else {
      setSearchResult(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Submitted":
        return <FileText className="h-4 w-4" />;
      case "Received":
        return <AlertCircle className="h-4 w-4" />;
      case "Under Investigation":
        return <Clock className="h-4 w-4" />;
      case "Resolved":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-blue-100 text-blue-800";
      case "Received":
        return "bg-yellow-100 text-yellow-800";
      case "Under Investigation":
        return "bg-orange-100 text-orange-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-blue-600" />
            Track Your Case
          </CardTitle>
          <CardDescription>
            Enter your case ID to check the status of your report
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <Label htmlFor="caseId">Case ID</Label>
              <Input
                id="caseId"
                placeholder="e.g., PBR-ABC123DEF"
                value={caseId}
                onChange={(e) => setCaseId(e.target.value.toUpperCase())}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {caseId && !searchResult && (
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <p className="text-yellow-800">
                  Case not found. Please check your case ID and try again.
                </p>
              </CardContent>
            </Card>
          )}

          {searchResult && (
            <div className="space-y-6">
              {/* Case Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Case {searchResult.id}</span>
                    <Badge className={getStatusColor(searchResult.status)}>
                      {getStatusIcon(searchResult.status)}
                      <span className="ml-1">{searchResult.status}</span>
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Incident Type</Label>
                      <p className="text-sm">{searchResult.incidentType}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Report Date</Label>
                      <p className="text-sm">{searchResult.reportDate}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Location</Label>
                      <p className="text-sm">{searchResult.location}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Last Update</Label>
                      <p className="text-sm">{searchResult.lastUpdate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Case Timeline</CardTitle>
                  <CardDescription>
                    Track the progress of your case through each stage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {searchResult.updates.map((update: any, index: number) => (
                      <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(update.status)}`}>
                            {getStatusIcon(update.status)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{update.status}</span>
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                          <p className="text-sm text-gray-600">{update.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    If you have questions about your case or need additional support:
                  </p>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p>• IPOA Hotline: 0800-IPOA-10 (0800-4762-10)</p>
                    <p>• Legal Aid Hotline: 0800-123-456</p>
                    <p>• Email: cases@pbrkenya.org</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Demo Cases */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-sm">Demo Cases (for testing)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>PBR-ABC123DEF</strong> - Under Investigation</p>
                <p><strong>PBR-XYZ789GHI</strong> - Resolved</p>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseTracker;
