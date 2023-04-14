/*import React, { useState, useEffect } from "react";
import { CustomButton, FormField, Loader } from "../components";
import { useStateContext } from "../context";
import { loader } from "../assets";
import language from "@google-cloud/language";


const AIsearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [who, setWho] = useState("");
  const [suggestedCampaigns, setSuggestedCampaigns] = useState([]);


  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const handleFormFieldChange = (e) => {
    setWho(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize the Google Cloud client
    const client = new language.LanguageServiceClient();
    console.log(who);

    // Analyze the user input for entities and categories
    const [userInputEntities] = await client.analyzeEntities({
      document: {
        content: who,
        type: "PLAIN_TEXT",
      },
    });
    const [userInputCategories] = await client.classifyText({
      document: {
        content: who,
        type: "PLAIN_TEXT",
      },
    });

    // Filter the campaigns based on matching entities and categories
    const relevantCampaigns = campaigns.filter((campaign) => {
      const [campaignEntities] = client.analyzeEntities({
        document: {
          content: campaign.description,
          type: "PLAIN_TEXT",
        },
      });
      const [campaignCategories] = client.classifyText({
        document: {
          content: campaign.description,
          type: "PLAIN_TEXT",
        },
      });

      const matchingEntities = campaignEntities.entities.filter((entity) =>
        userInputEntities.entities.some(
          (inputEntity) => inputEntity.name === entity.name
        )
      );

      const matchingCategories = campaignCategories.categories.filter(
        (category) =>
          userInputCategories.categories.some(
            (inputCategory) => inputCategory.name === category.name
          )
      );

      return matchingEntities.length > 0 || matchingCategories.length > 0;
    });

    setSuggestedCampaigns(relevantCampaigns);
    console.log(suggestedCampaigns);
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && (
        <img
          src={loader}
          alt="loader"
          className="w-[100px] h-[100px] object-contain"
        />
      )}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Who do you want to donate to?
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Describe in your own words"
            placeholder="I want to donate to donate to animal welfare"
            isTextArea
            value={who}
            handleChange={(e) => handleFormFieldChange(e)}
          />
        </div>
  
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  )

}

export default AIsearch */

//set GOOGLE_APPLICATION_CREDENTIALS="C:\Project\ChainFund\decent-micron-383707-d0395c4b3446.json"

import React from 'react'

const AIsearch = () => {
  return (
    <div>AIsearch</div>
  )
}

export default AIsearch