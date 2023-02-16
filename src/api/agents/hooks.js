import { useStore } from '../../store';
import { useState, useEffect } from 'react';

import axios from 'axios';

export const useGetAgents = () => {
  const agents = useStore((state) => state.agents);
  const setAgents = useStore((state) => state.setAgents);

  const fetchAgent = async () => {
    if (!agents.length) { 
      const response = await axios.get(
        `https://valorant-api.com/v1/agents?isPlatyableCharacter=true`
      );
  
      if (response && response.data) setAgents(response.data);
    }
    
    return;
  };

  useEffect(() => {
    fetchAgent();
  }, []);

  return { agents };
};

export const useGetAgentByUuid = (uuid) => {
  const agent = useStore((state) => state.agents.data.find((agent) => agent.uuid === uuid));

  return { agent };
};
