import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Calendar } from "lucide-react";

const NutritionProgramCard = ({
    title,
    reviews,
    description,
    programDuration,
    consultations,
    price,
}: {
    title: string;
    reviews: string;
    description: string;
    programDuration: string;
    consultations: string;
    price: string;
}) => {
    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{reviews}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{programDuration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{consultations}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{price}</span>
                    <Button variant="outline" className="bg-customGreen text-white hover:bg-green-600">
                        Learn More
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const Programs = () => {
    const [programs, setPrograms] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/programs/nutrition-programs', {
                    params: { page, limit: 10, search }
                });
                if (response.data.length < 10) {
                    setHasMore(false);
                }
                setPrograms(prevPrograms => [...prevPrograms, ...response.data]);
            } catch (err) {
                setError('Failed to fetch programs');
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, [page, search]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPrograms([]);
        setPage(1);
        setHasMore(true);
    };

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container px-4 mx-auto pt-24 pb-12">
                <h1 className="text-3xl font-bold mb-8">Nutrition Programs</h1>
                <input
                    type="text"
                    placeholder="Search programs by title"
                    value={search}
                    onChange={handleSearch}
                    className="mb-8 p-2 border rounded-md w-full"
                />
                {loading && page === 1 ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {programs.map((program: any) => (
                                <NutritionProgramCard
                                    key={program._id}
                                    title={program.title}
                                    reviews={program.reviews}
                                    description={program.description}
                                    programDuration={program.programDuration}
                                    consultations={program.consultations}
                                    price={program.price}
                                />
                            ))}
                        </div>
                        {hasMore && (
                            <div className="flex justify-center mt-8">
                                <Button onClick={loadMore} className="bg-customGreen text-white hover:bg-green-600">
                                    View More
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Programs;