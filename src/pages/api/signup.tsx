// import { createClient } from '@/utils/supabase/server';
// const supabase = createClient();

// export default async function handler(req: any, res: any) {
    
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     const { user, error } = await supabase.auth.signUp({
//       email,
//       options: {
//         emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/verify`, 
//       },
//     });

//     if (error) {
//       return res.status(400).json({ error: error.message });
//     }

//     return res.status(200).json({ message: 'Verification email sent!' });
//   } else {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
// }
