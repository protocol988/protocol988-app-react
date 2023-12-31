"use client";

import { useContext } from "react";
import { Title } from "@tremor/react";
import { Form } from "@/components/form";
import { Metrics } from "@/components/metrics";
//import { ForwardContext } from "@/context/ForwardContext";

export default function Mint() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="sr-only">Page title</h1>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <Metrics />
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <div className="pb-2">
                  <Title>Create Forward Swap</Title>
                </div>
                <Form />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
