import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Goals from './components/Goals';
import Architecture from './components/Architecture';
import DataModel from './components/DataModel';
import DataCollection from './components/DataCollection';
import AiAnalysis from './components/AiAnalysis';
import AlertSystem from './components/AlertSystem';
import Automation from './components/Automation';
import Security from './components/Security';
import Deployment from './components/Deployment';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <Features />
        <Goals />
        <Architecture />
        <DataModel />
        <DataCollection />
        <AiAnalysis />
        <AlertSystem />
        <Automation />
        <Security />
        <Deployment />
      </main>
      <Footer />
    </div>
  );
}
