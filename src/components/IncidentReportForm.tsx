
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, MapPin, Calendar, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IncidentReportFormProps {
  onBack: () => void;
}

const IncidentReportForm = ({ onBack }: IncidentReportFormProps) => {
  const { toast } = useToast();
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [formData, setFormData] = useState({
    incidentType: "",
    date: "",
    time: "",
    location: "",
    county: "",
    description: "",
    officersInvolved: "",
    witnesses: "",
    evidence: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random case ID
    const caseId = `PBR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    toast({
      title: "Report Submitted Successfully",
      description: `Your case ID is: ${caseId}. Save this number to track your case.`,
    });

    console.log("Report submitted:", { ...formData, isAnonymous, caseId });
    
    // Reset form
    setFormData({
      incidentType: "",
      date: "",
      time: "",
      location: "",
      county: "",
      description: "",
      officersInvolved: "",
      witnesses: "",
      evidence: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
    });
  };

  const kenyanCounties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay",
    "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii",
    "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera",
    "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi",
    "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River",
    "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

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
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Report Police Misconduct
          </CardTitle>
          <CardDescription>
            Please provide as much detail as possible. All information is encrypted and secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Privacy Toggle */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="anonymous" 
                checked={isAnonymous} 
                onCheckedChange={setIsAnonymous}
              />
              <Label htmlFor="anonymous" className="text-sm font-medium">
                Submit this report anonymously (recommended for your safety)
              </Label>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Anonymous reports are still tracked and investigated. You can check status using your case ID.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Incident Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Incident Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="incidentType">Type of Incident *</Label>
                  <Select value={formData.incidentType} onValueChange={(value) => setFormData({...formData, incidentType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excessive-force">Excessive Force</SelectItem>
                      <SelectItem value="unlawful-arrest">Unlawful Arrest</SelectItem>
                      <SelectItem value="harassment">Harassment</SelectItem>
                      <SelectItem value="discrimination">Discrimination</SelectItem>
                      <SelectItem value="corruption">Corruption/Bribery</SelectItem>
                      <SelectItem value="detention">Unlawful Detention</SelectItem>
                      <SelectItem value="property-damage">Property Damage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="county">County *</Label>
                  <Select value={formData.county} onValueChange={(value) => setFormData({...formData, county: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select county" />
                    </SelectTrigger>
                    <SelectContent>
                      {kenyanCounties.map((county) => (
                        <SelectItem key={county} value={county}>{county}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date of Incident *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="time">Approximate Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location Details *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Junction of Uhuru Highway and Kenyatta Avenue, Nairobi"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description of Incident *</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe what happened in detail. Include sequence of events, any injuries, and relevant context."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="min-h-32"
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              
              <div>
                <Label htmlFor="officersInvolved">Officers Involved (if known)</Label>
                <Textarea
                  id="officersInvolved"
                  placeholder="Badge numbers, names, descriptions, vehicle details, etc."
                  value={formData.officersInvolved}
                  onChange={(e) => setFormData({...formData, officersInvolved: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="witnesses">Witnesses</Label>
                <Textarea
                  id="witnesses"
                  placeholder="Names and contact information of any witnesses (if available and consented)"
                  value={formData.witnesses}
                  onChange={(e) => setFormData({...formData, witnesses: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="evidence">Evidence Available</Label>
                <Textarea
                  id="evidence"
                  placeholder="Photos, videos, medical records, etc. (describe what you have - do not upload sensitive files here)"
                  value={formData.evidence}
                  onChange={(e) => setFormData({...formData, evidence: e.target.value})}
                />
              </div>
            </div>

            {/* Contact Information (if not anonymous) */}
            {!isAnonymous && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <p className="text-sm text-gray-600">
                  This information will be kept confidential and only used for case follow-up.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Your Name</Label>
                    <Input
                      id="contactName"
                      placeholder="Full name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input
                      id="contactPhone"
                      placeholder="e.g., +254 700 000 000"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email Address</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                  />
                </div>
              </div>
            )}

            {/* Safety Warning */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-red-800 mb-2">Important Safety Notice</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• If you're in immediate danger, call emergency services (999 or 911)</li>
                  <li>• Consider your safety when deciding whether to report anonymously</li>
                  <li>• Save your case ID to track your report's progress</li>
                  <li>• Your report is encrypted and will be handled confidentially</li>
                </ul>
              </CardContent>
            </Card>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncidentReportForm;
