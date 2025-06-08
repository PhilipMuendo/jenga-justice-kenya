
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Scale, Shield, Users, Phone, FileText, ExternalLink } from "lucide-react";

interface ResourceCenterProps {
  onBack: () => void;
}

const ResourceCenter = ({ onBack }: ResourceCenterProps) => {
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
            <Shield className="h-5 w-5 text-green-600" />
            Legal Resources & Support
          </CardTitle>
          <CardDescription>
            Essential information about your rights and available support services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="rights" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="rights">Your Rights</TabsTrigger>
              <TabsTrigger value="legal">Legal Aid</TabsTrigger>
              <TabsTrigger value="support">Support Groups</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>

            <TabsContent value="rights" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Scale className="h-5 w-5" />
                    Know Your Rights in Kenya
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">During Police Encounters</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>You have the right to remain silent</li>
                      <li>You must be informed of the reason for arrest</li>
                      <li>You have the right to legal representation</li>
                      <li>You must be brought before a court within 24 hours if arrested</li>
                      <li>You have the right to be treated with dignity and respect</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Constitutional Rights (Article 29)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Freedom and security of the person</li>
                      <li>Freedom from torture and cruel, inhuman or degrading treatment</li>
                      <li>Freedom from slavery and forced labor</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">What to Do During Police Misconduct</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Stay calm and do not resist physically</li>
                      <li>Clearly state: "I do not consent to this"</li>
                      <li>Remember or write down badge numbers and names</li>
                      <li>Ask for witnesses' contact information if safe to do so</li>
                      <li>Seek medical attention if injured</li>
                      <li>Report the incident as soon as it's safe to do so</li>
                    </ol>
                  </div>

                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="pt-6">
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> Your safety is the top priority. Do not put yourself at further risk 
                        by confronting officers directly. Document and report the incident when it's safe to do so.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legal" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Free Legal Aid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">National Legal Aid Service</h4>
                        <p className="text-sm text-gray-600">Provides free legal services to those who cannot afford them</p>
                        <p className="text-sm"><strong>Phone:</strong> 0800-123-456</p>
                        <p className="text-sm"><strong>Email:</strong> info@legalaid.go.ke</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Kenya Human Rights Commission</h4>
                        <p className="text-sm text-gray-600">Promotes and protects human rights in Kenya</p>
                        <p className="text-sm"><strong>Phone:</strong> +254 20 3874998</p>
                        <p className="text-sm"><strong>Email:</strong> admin@khrc.or.ke</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pro Bono Lawyers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Law Society of Kenya</h4>
                        <p className="text-sm text-gray-600">Can connect you with volunteer lawyers</p>
                        <p className="text-sm"><strong>Phone:</strong> +254 20 2719061</p>
                        <p className="text-sm"><strong>Website:</strong> lsk.or.ke</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Kituo Cha Sheria</h4>
                        <p className="text-sm text-gray-600">Legal aid organization focusing on human rights</p>
                        <p className="text-sm"><strong>Phone:</strong> +254 20 3874998</p>
                        <p className="text-sm"><strong>Email:</strong> info@kituochasheria.or.ke</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Access Legal Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Contact one of the organizations listed above</li>
                    <li>Explain your situation and financial circumstances</li>
                    <li>Provide documentation of the incident if available</li>
                    <li>Be prepared to provide identification documents</li>
                    <li>Follow up regularly on your case status</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Victim Support Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Survivors of Police Brutality Kenya</h4>
                        <p className="text-sm text-gray-600">Support group for victims and families</p>
                        <p className="text-sm"><strong>Phone:</strong> 0700-123-456</p>
                        <p className="text-sm"><strong>Email:</strong> support@spbkenya.org</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Trauma Counseling Services</h4>
                        <p className="text-sm text-gray-600">Professional psychological support</p>
                        <p className="text-sm"><strong>Phone:</strong> 0800-TRAUMA</p>
                        <p className="text-sm"><strong>Hours:</strong> 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Community Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Social Justice Centres</h4>
                        <p className="text-sm text-gray-600">Community-based advocacy and support</p>
                        <p className="text-sm"><strong>Locations:</strong> Nairobi, Mombasa, Kisumu</p>
                        <p className="text-sm"><strong>Phone:</strong> 0722-456-789</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Religious Organizations</h4>
                        <p className="text-sm text-gray-600">Faith-based support and counseling</p>
                        <p className="text-sm"><strong>Contact:</strong> Through local churches/mosques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Financial Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Emergency Financial Aid:</strong> Contact National Legal Aid Service</p>
                    <p><strong>Medical Expenses:</strong> Some organizations provide assistance with medical bills</p>
                    <p><strong>Court Costs:</strong> Legal aid can cover court fees for eligible cases</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacts" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800">Emergency Contacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Police Emergency:</strong> 999</p>
                      <p className="text-sm"><strong>Medical Emergency:</strong> 911</p>
                      <p className="text-sm"><strong>Fire Department:</strong> 999</p>
                      <p className="text-sm"><strong>Crisis Helpline:</strong> 0800-CRISIS</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Oversight Bodies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Independent Policing Oversight Authority (IPOA)</h4>
                        <p className="text-sm"><strong>Phone:</strong> 0800-IPOA-10</p>
                        <p className="text-sm"><strong>Email:</strong> info@ipoa.go.ke</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Kenya National Commission on Human Rights</h4>
                        <p className="text-sm"><strong>Phone:</strong> +254 20 2270000</p>
                        <p className="text-sm"><strong>Email:</strong> haki@knchr.org</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Media & Advocacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Journalists for Human Rights</h4>
                        <p className="text-sm"><strong>Phone:</strong> 0722-123-456</p>
                        <p className="text-sm"><strong>Email:</strong> media@jhr.or.ke</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Civil Society Organizations</h4>
                        <p className="text-sm"><strong>Contact:</strong> Through respective websites</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">International Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">UN Human Rights Office</h4>
                        <p className="text-sm"><strong>Phone:</strong> +254 20 7624770</p>
                        <p className="text-sm"><strong>Email:</strong> kenya@ohchr.org</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">Amnesty International Kenya</h4>
                        <p className="text-sm"><strong>Phone:</strong> +254 20 2721338</p>
                        <p className="text-sm"><strong>Email:</strong> info@amnestykenya.org</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceCenter;
