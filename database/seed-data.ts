
interface SeedData {
entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'pending -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
            status: 'pending',
            createdAt: Date.now(),
         },
         {
            description: 'pending22 -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
            status: 'pending',
            createdAt: Date.now(),
         },
         {
            description: 'in-progress -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
            status: 'in-progress',
            createdAt: Date.now() - 100000,
         },
         {
            description: 'finished -- asdjasbjbsa asn bdnasbdb asjdb jas bdj',
            status: 'finished',
            createdAt: Date.now() - 1000000,
         },
    ]
}