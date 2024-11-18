import React from 'react';
import { Users, Award, Building2, Star, Trophy, Calendar } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Jeff Thompson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      bio: 'With over 30 years of experience in real estate, Jeff founded Jeff Realty with a vision to transform the industry.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=400',
      bio: 'Specializing in luxury properties, Sarah has closed over $100M in sales throughout her career.'
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Michael ensures all properties are maintained to the highest standards for our clients.'
    }
  ];

  const milestones = [
    {
      year: 1990,
      title: 'Company Founded',
      description: 'Jeff Realty was established with a single office in downtown.',
      icon: <Building2 className="h-6 w-6" />
    },
    {
      year: 2000,
      title: 'Expansion Milestone',
      description: 'Opened five new offices across the state.',
      icon: <Star className="h-6 w-6" />
    },
    {
      year: 2010,
      title: 'Industry Recognition',
      description: 'Named "Best Real Estate Agency" for 5 consecutive years.',
      icon: <Trophy className="h-6 w-6" />
    },
    {
      year: 2020,
      title: 'Digital Transformation',
      description: 'Launched innovative virtual touring platform.',
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-blue-100">Building trust through exceptional service since 1990</p>
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
          <Building2 className="h-64 w-64" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">30+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">1000+</p>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-gray-600">Expert Agents</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Company History Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="flex-1 w-full md:w-auto">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        {milestone.icon}
                      </div>
                      <div>
                        <p className="text-xl font-bold">{milestone.year}</p>
                        <h3 className="text-lg font-semibold">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The experts that make it all possible</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">We strive for excellence in every transaction</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Client First</h3>
            <p className="text-gray-600">Your success is our top priority</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">Trust built on honest relationships</p>
          </div>
        </div>
      </div>
    </div>
  );
}