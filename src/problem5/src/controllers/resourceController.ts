import { Request, Response } from 'express';
import { Resource } from '../models/Resource';

export const createResource = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    // Validate required fields
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    // Create new resource instance
    const newResource = new Resource();
    newResource.name = name;
    newResource.description = description;

    // Save the resource to database
    await newResource.save();

    res.status(201).json(newResource);
  } catch (error) {
    console.error('Error creating resource:', error);
    res.status(500).json({ error: 'Error creating resource' });
  }
};

export const listResources = async (req: Request, res: Response) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching resources' });
  }
};

export const getResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const resource = await Resource.findByPk(id);
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching resource' });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const [updatedRowsCount] = await Resource.update({ name, description }, { where: { id } });
    if (updatedRowsCount > 0) {
      const updatedResource = await Resource.findByPk(id);
      res.json(updatedResource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating resource' });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedRowsCount = await Resource.destroy({ where: { id } });
    if (deletedRowsCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting resource' });
  }
};
