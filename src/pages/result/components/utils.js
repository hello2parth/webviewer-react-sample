export const mockData = {
  "table of contents": {
      "DIVISION 01 - GENERAL REQUIREMENTS": [
          {
              title: "SECTION 01 3200 CONSTRUCTION PROGRESS DOCUMENTATION",
              link: ""
          }
      ]
  },
  Material: {
      accoustic: [
          {
              title:
                  "SECTION 07 2100 INSULATION - B. Insulation in Metal Stud Framed Walls: Batt insulation with no vapor retarder at exterior walls in office area and walls separating conditioned from non-conditioned areas and for acoustical purposes around restrooms.",
              link: ""
          }
      ],
      aluminum: [
          {
              title:
                  "SECTION 05 5000 METAL FABRICATIONS - F. Corrosion Protection: Coat concealed surfaces of aluminum that will come into contact with grout, concrete, masonry, wood, or dissimilar metals with the following:",
              link: ""
          }
      ],
      asphalt: [
          {
              title:
                  "SECTION 07 2418 WATER-DRAINAGE EXTERIOR INSULATION AND FINISH SYSTEM (EIFS) - D. Flexible-Membrane Flashing: Cold-applied, fully self-adhering, self-healing, rubberized-asphalt and polyethylene-film composite sheet or tape and primer; EIFS manufacturer's standard or product recommended in writing by EIFS manufacturer.",
              link: ""
          }
      ]
  },
  Product: {

      "DIVISION 04 - MASONRY": [
          {
              division: "04",
              section: "SECTION 04 2000 UNIT MASONRY ASSEMBLIES",
              product: "Mortar Net USA, Ltd: www.mortarnet.com"
          }
      ],
      "DIVISION 05 - METALS": [
          {
              division: "05",
              section: "SECTION 05 4000 COLD-FORMED METAL FRAMING",
              product: "The Steel Network, Inc"
          }
      ],
      "DIVISION 06 - WOOD, PLASTICS, AND COMPOSITES": [
          {
              division: "06",
              section: "SECTION 06 1600 SHEATHING",
              product: "Temple-Inland Inc.; GreenGlass"
          }
      ]
  },
  Submittals: [
      {
          "spec section": "01 3200",
          name: "CONSTRUCTION PROGRESS DOCUMENTATION",
          part: "1.1",
          type: "",
          description: "INFORMATIONAL SUBMITTALS"
      },
      {
          "spec section": "01 3200",
          name: "CONSTRUCTION PROGRESS DOCUMENTATION",
          part: "1.1.A",
          type: "Format for Submittals",
          description: "Submit required submittals in the following format: • PDF electronic file."
      }
  ],
  Warranties: [
      {
          title:
              "Warranty: Upon request, at completion of installation, provide Parex USA Systems Warranty. See warranty schedule for available Warranties. (MOLD PREVENTION MEASURES)",
          link: ""
      },
      {
          title:
              "A. Special Manufacturer's Warranty: Manufacturer's standard form in which joint-sealant manufacturer agrees to furnish joint sealants to repair or replace those that do not comply with performance and other requirements specified in this Section within specified warranty period. (JOINT SEALANTS)",
          link: ""
      }
  ]
};

export const getDropDownData = () => {
  const results = [];
  for(let key in mockData) {
    results.push({
      value: [key],
      label: [key]
    })
  }
  return results;
}
