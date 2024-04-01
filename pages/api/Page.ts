import { NextApiRequest, NextApiResponse } from 'next';
import { Datastore } from '@google-cloud/datastore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
  }

  try {
    // Get the project ID from environment variables
    const projectId = process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID;

    // Initialize Datastore with the project ID
    const datastore = new Datastore({
      projectId: projectId,
    });

    const formData = req.body;

    const entity = {
      key: datastore.key(['NewsletterSignup']),
      data: formData,
    };

    await datastore.save(entity);

    res.status(200).json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).json({ error: 'Internal Server Error', message: 'Error processing form submission' });
  }
}
