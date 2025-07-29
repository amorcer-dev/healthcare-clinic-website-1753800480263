import React from 'react';
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'
import { WidgetTestimonialCard } from '../components/WidgetTestimonialCard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <WidgetAboutDoctor
        aboutText="Professional healthcare services for you and your family"
        education={[
        {
                "college": "Harvard Medical School",
                "activity": "MD"
        },
        {
                "college": "Johns Hopkins University",
                "activity": "Residency"
        }
]}
        hospitals={[
        "Massachusetts General Hospital",
        "Johns Hopkins Hospital"
]}
        certificates={[
        "Board Certified Family Medicine",
        "Telemedicine Certification"
]}
        languages={[
        "English",
        "Spanish",
        "French"
]}
      />
      <WidgetProfile
        doctorName="HealthCare Clinic"
        specialty="Family Medicine"
        patients="2,500+"
        experience="10+ years"
        rating="4.9"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
      />
      <WidgetServicesAndConditions
        specializedServices={[
        {
                "name": "Annual Physicals",
                "icon": "🏥"
        },
        {
                "name": "Chronic Disease Management",
                "icon": "💊"
        },
        {
                "name": "Mental Health",
                "icon": "🧠"
        },
        {
                "name": "Women's Health",
                "icon": "👩"
        },
        {
                "name": "Preventive Care",
                "icon": "🛡️"
        }
]}
        conditions={[
        "Diabetes",
        "Hypertension",
        "Depression",
        "Anxiety",
        "Asthma",
        "Obesity",
        "Heart Disease",
        "Thyroid Disorders"
]}
      />
      <WidgetTestimonialCarousel
        testimonials={[
        {
                "name": "Sarah J.",
                "age": 34,
                "condition": "Diabetes Management",
                "rating": 5,
                "quote": "Dr. Smith is amazing! Very thorough and caring."
        },
        {
                "name": "Mike C.",
                "age": 28,
                "condition": "Annual Physical",
                "rating": 5,
                "quote": "Convenient telehealth visits that actually work."
        },
        {
                "name": "Emily D.",
                "age": 42,
                "condition": "Mental Health",
                "rating": 5,
                "quote": "Professional, knowledgeable, and easy to talk to."
        }
]}
        overallRating={4.9}
        totalReviews={127}
        recommendedRate={98}
      />
      <WidgetTestimonialCard
        quote="Dr. Bellamy was incredibly thorough and caring. He took the time to explain everything clearly and made me feel comfortable throughout the entire process."
        author="Sarah Johnson"
        age={45}
        condition="Diabetes Management"
        rating={5}
      />
    </main>
  );
}