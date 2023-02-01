import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database';
import { Entry } from '../../models';

type Data = {
    mesasge: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    if ( process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({mesasge: 'No tiene ecceso a este servicio'});
    }

    await db.connect();
    await Entry.deleteMany();
    await Entry.insertMany( seedData.entries );
    await db.disconnect();

    res.status(200).json({ mesasge: 'Proceso realizado correctamente' });
}