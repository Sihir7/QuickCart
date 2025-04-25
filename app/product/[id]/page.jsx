'use client';
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Product = () => {
    const { id } = useParams();
    const { products, router, addToCart } = useAppContext();

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            const product = products.find(product => product._id === id);
            setProductData(product);
        };
        fetchProductData();
    }, [id, products.length]);

    return productData ? (
        <>
            <Navbar />
            {/* ...rest of your product page content remains unchanged... */}
            <Footer />
        </>
    ) : <Loading />;
};

export default Product;
