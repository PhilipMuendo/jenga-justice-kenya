
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, AlertTriangle, Heart, Shield, Scale } from "lucide-react";

interface EmergencyContactsProps {
  onBack: () => void;
}

const EmergencyContacts = ({ onBack }: EmergencyContactsProps) => {
  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>

      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <AlertTriangle className="h-5 w-5" />
            Emergency Contacts
          </CardTitle>
          <CardDescription className="text-red-700">
            If you're in immediate danger, call these numbers immediately
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  Police Emergency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('999')} 
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                >
                  Call 999
                </Button>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  For immediate police assistance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-600" />
                  Medical Emergency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('911')} 
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                >
                  Call 911
                </Button>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  For medical emergencies
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Crisis Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Crisis Support & Safety
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Crisis Helpline</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('0800-CRISIS')} 
                  variant="outline" 
                  className="w-full"
                >
                  0800-CRISIS
                </Button>
                <p className="text-sm text-gray-600 mt-2">24/7 mental health support</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Trauma Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('0800-TRAUMA')} 
                  variant="outline" 
                  className="w-full"
                >
                  0800-TRAUMA
                </Button>
                <p className="text-sm text-gray-600 mt-2">Professional trauma support</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Legal Aid Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('0800-123-456')} 
                  variant="outline" 
                  className="w-full"
                >
                  0800-123-456
                </Button>
                <p className="text-sm text-gray-600 mt-2">Immediate legal assistance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Victim Support</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('0700-123-456')} 
                  variant="outline" 
                  className="w-full"
                >
                  0700-123-456
                </Button>
                <p className="text-sm text-gray-600 mt-2">Support for victims & families</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Oversight Bodies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-green-600" />
            Oversight & Reporting Bodies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">IPOA Hotline</CardTitle>
                <CardDescription>Independent Policing Oversight Authority</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('0800-IPOA-10')} 
                  variant="outline" 
                  className="w-full"
                >
                  0800-IPOA-10
                </Button>
                <p className="text-sm text-gray-600 mt-2">Report police misconduct</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">KNCHR</CardTitle>
                <CardDescription>Kenya National Commission on Human Rights</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('+254202270000')} 
                  variant="outline" 
                  className="w-full"
                >
                  +254 20 2270000
                </Button>
                <p className="text-sm text-gray-600 mt-2">Human rights violations</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Kenya Human Rights Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('+254203874998')} 
                  variant="outline" 
                  className="w-full"
                >
                  +254 20 3874998
                </Button>
                <p className="text-sm text-gray-600 mt-2">Human rights advocacy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Amnesty International Kenya</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCall('+254202721338')} 
                  variant="outline" 
                  className="w-full"
                >
                  +254 20 2721338
                </Button>
                <p className="text-sm text-gray-600 mt-2">International human rights</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* International Support */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">International Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">UN Human Rights Office Kenya</h4>
              <Button 
                onClick={() => handleCall('+254207624770')} 
                variant="outline" 
                className="w-full mb-2"
              >
                +254 20 7624770
              </Button>
              <p className="text-sm text-gray-600">Email: kenya@ohchr.org</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">International Criminal Court</h4>
              <p className="text-sm text-gray-600 mb-2">For serious crimes against humanity</p>
              <p className="text-sm text-gray-600">Website: icc-cpi.int</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Tips */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-800">Safety Tips When Calling</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Find a safe, private location before calling</li>
            <li>• Have your location and incident details ready</li>
            <li>• If you can't speak freely, consider texting or using online reporting</li>
            <li>• Save important numbers in your phone under different names if needed</li>
            <li>• Trust your instincts about your safety</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyContacts;
