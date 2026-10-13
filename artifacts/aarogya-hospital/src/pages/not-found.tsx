import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { HOSPITAL, PHONE, TEL } from '@/components/common';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              {HOSPITAL}
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            404 Page Not Found
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a className="font-semibold text-pink-800 underline" href="/">Return to the home page</a>
            <a className="font-semibold text-pink-800 underline" href={TEL}>Emergency contact: {PHONE}</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
